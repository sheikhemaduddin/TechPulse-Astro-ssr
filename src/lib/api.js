// ─── API Client ───────────────────────────────────────────────────────────────
// Set PUBLIC_API_URL in Vercel to your live Fastify backend.
// If the API is unreachable, demo content from mock-data.js is used automatically.
import { mockAPI } from "./mock-data.js";

const BASE = import.meta.env.PUBLIC_API_URL || "http://localhost:4000";

function shouldUseMockFirst() {
  if (import.meta.env.PUBLIC_USE_MOCK === "true") return true;
  if (!import.meta.env.PUBLIC_API_URL) return true;
  return /localhost|127\.0\.0\.1/.test(BASE);
}

async function fetchAPI(endpoint, options = {}) {
  if (shouldUseMockFirst()) {
    return mockAPI(endpoint, options);
  }

  try {
    const res = await fetch(`${BASE}${endpoint}`, {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ error: res.statusText }));
      throw new Error(err.error || `HTTP ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.warn(`API Error [${endpoint}]: ${err.message} — using demo data`);
    return mockAPI(endpoint, options);
  }
}

// ─── Posts ────────────────────────────────────────────────────────────────────
export const getPosts = (params = {}) => {
  const qs = new URLSearchParams(params).toString();
  return fetchAPI(`/api/posts${qs ? "?" + qs : ""}`);
};

export const getFeaturedPosts = () => fetchAPI("/api/posts/featured");

export const getPost = (slug) => fetchAPI(`/api/posts/${slug}`);

export const likePost = (slug) =>
  fetchAPI(`/api/posts/${slug}/like`, { method: "PATCH" });

// ─── Categories ───────────────────────────────────────────────────────────────
export const getCategories = () => fetchAPI("/api/categories");
export const getCategory = (slug) => fetchAPI(`/api/categories/${slug}`);

// ─── Comments ─────────────────────────────────────────────────────────────────
export const getComments = (postId) => fetchAPI(`/api/comments?postId=${postId}`);

export const addComment = (data, token) =>
  fetchAPI("/api/comments", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(data),
  });

// ─── Auth ─────────────────────────────────────────────────────────────────────
export const login = (email, password) =>
  fetchAPI("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

export const register = (data) =>
  fetchAPI("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });

// ─── Analytics ────────────────────────────────────────────────────────────────
export const getTopPosts = () => fetchAPI("/api/analytics/top-posts");
export const getPostsByCategory = () => fetchAPI("/api/analytics/posts-by-category");
