import http from "node:http";
import {
  categories,
  getPostDetail,
  listPosts,
  posts,
  users,
} from "./mock-data.mjs";

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
  const { pathname, searchParams } = url;

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    });
    return res.end();
  }

  try {
    if (pathname === "/api/categories" && req.method === "GET") {
      return send(res, 200, { categories });
    }

    const categoryMatch = pathname.match(/^\/api\/categories\/([^/]+)$/);
    if (categoryMatch && req.method === "GET") {
      const category = categories.find((c) => c.slug === categoryMatch[1]);
      if (!category) return send(res, 404, { error: "Category not found" });
      return send(res, 200, category);
    }

    if (pathname === "/api/posts/featured" && req.method === "GET") {
      return send(res, 200, { posts: posts.filter((p) => p.featured) });
    }

    if (pathname === "/api/posts" && req.method === "GET") {
      const data = listPosts({
        limit: Number(searchParams.get("limit") || 9),
        page: Number(searchParams.get("page") || 1),
        category: searchParams.get("category") || "",
        q: searchParams.get("q") || "",
      });
      return send(res, 200, data);
    }

    const likeMatch = pathname.match(/^\/api\/posts\/([^/]+)\/like$/);
    if (likeMatch && req.method === "PATCH") {
      const post = posts.find((p) => p.slug === likeMatch[1]);
      if (!post) return send(res, 404, { error: "Post not found" });
      post.likes += 1;
      return send(res, 200, { likes: post.likes });
    }

    const postMatch = pathname.match(/^\/api\/posts\/([^/]+)$/);
    if (postMatch && req.method === "GET") {
      const post = getPostDetail(postMatch[1]);
      if (!post) return send(res, 404, { error: "Post not found" });
      return send(res, 200, post);
    }

    if (pathname === "/api/analytics/top-posts" && req.method === "GET") {
      const top = [...posts].sort((a, b) => b.views - a.views).slice(0, 5);
      return send(res, 200, { posts: top });
    }

    if (pathname === "/api/analytics/posts-by-category" && req.method === "GET") {
      const data = categories.map((c) => ({
        category: c.name,
        count: posts.filter((p) => p.categoryId === c.id).length,
      }));
      return send(res, 200, { data });
    }

    if (pathname === "/api/auth/login" && req.method === "POST") {
      const body = await readBody(req);
      const user = users[body.email];
      if (!user || body.password !== "password123") {
        return send(res, 401, { error: "Invalid email or password" });
      }
      return send(res, 200, {
        token: `mock-token-${user.id}`,
        user,
      });
    }

    if (pathname === "/api/auth/register" && req.method === "POST") {
      const body = await readBody(req);
      return send(res, 201, {
        token: "mock-token-new",
        user: { id: "u99", name: body.name || "New User", email: body.email, role: "reader" },
      });
    }

    send(res, 404, { error: "Not found" });
  } catch (err) {
    send(res, 500, { error: err.message || "Server error" });
  }
});

server.listen(PORT, () => {
  console.log(`Mock API running at http://localhost:${PORT}`);
});
