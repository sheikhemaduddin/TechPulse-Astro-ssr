// ─── API Client (built-in demo data — no external API or env vars required) ───
import { mockAPI } from "./mock-data.js";

function fetchAPI(endpoint, options = {}) {
  return mockAPI(endpoint, options);
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
