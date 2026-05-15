import { mockAPI } from "../../../lib/mock-data.js";

export async function POST({ request }) {
  try {
    const body = await request.json();
    const data = mockAPI("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    });
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 401 });
  }
}
