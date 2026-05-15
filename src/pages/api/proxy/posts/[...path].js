import { mockAPI } from "../../../../lib/mock-data.js";

const BASE = import.meta.env.PUBLIC_API_URL || "http://localhost:4000";

function useMock() {
  if (import.meta.env.PUBLIC_USE_MOCK === "true") return true;
  if (!import.meta.env.PUBLIC_API_URL) return true;
  return /localhost|127\.0\.0\.1/.test(BASE);
}

export async function ALL({ params, request }) {
  const endpoint = `/api/posts/${params.path}`;

  if (useMock()) {
    try {
      const body = ["POST", "PATCH", "PUT"].includes(request.method)
        ? await request.text()
        : undefined;
      const data = mockAPI(endpoint, { method: request.method, body });
      return Response.json(data);
    } catch (err) {
      return Response.json({ error: err.message }, { status: 500 });
    }
  }

  try {
    const res = await fetch(`${BASE}${endpoint}`, {
      method: request.method,
      headers: request.headers,
    });
    const data = await res.json();
    return Response.json(data, { status: res.status });
  } catch {
    try {
      const body = ["POST", "PATCH", "PUT"].includes(request.method)
        ? await request.text()
        : undefined;
      const data = mockAPI(endpoint, { method: request.method, body });
      return Response.json(data);
    } catch (err) {
      return Response.json({ error: err.message }, { status: 500 });
    }
  }
}
