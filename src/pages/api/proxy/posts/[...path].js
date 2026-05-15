import { mockAPI } from "../../../../lib/mock-data.js";

export async function ALL({ params, request }) {
  const endpoint = `/api/posts/${params.path}`;
  const body = ["POST", "PATCH", "PUT"].includes(request.method)
    ? await request.text()
    : undefined;

  try {
    const data = mockAPI(endpoint, { method: request.method, body });
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
