import http from "node:http";
import { categories, getPostDetail, listPosts, mockAPI, posts, users } from "../src/lib/mock-data.js";

const PORT = Number(process.env.PORT || 4000);

function send(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });
  res.end(payload);
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString());
  } catch {
    return {};
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const endpoint = url.pathname + url.search;

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    });
    return res.end();
  }

  try {
    const body = ["POST", "PATCH", "PUT"].includes(req.method)
      ? JSON.stringify(await readBody(req))
      : undefined;
    const data = mockAPI(endpoint, { method: req.method, body });
    send(res, 200, data);
  } catch (err) {
    const status = err.message.includes("not found") ? 404 : err.message.includes("Invalid") ? 401 : 500;
    send(res, status, { error: err.message || "Server error" });
  }
});

server.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});

export { categories, getPostDetail, listPosts, posts, users };
