// Proxy route — forwards requests from Astro to Fastify backend
// Avoids CORS issues in production when both apps are on same domain

export async function ALL({ params, request }) {
  const API = import.meta.env.PUBLIC_API_URL || "http://localhost:4000";
  const url = `${API}/api/posts/${params.path}`;
  
  try {
    const res = await fetch(url, {
      method: request.method,
      headers: request.headers,
    });
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Proxy error" }), { status: 500 });
  }
}
