export const categories = [
  { id: "c1", slug: "ai", name: "AI & ML", icon: "🤖", color: "#8b5cf6", postCount: 2 },
  { id: "c2", slug: "web", name: "Web Dev", icon: "🌐", color: "#3b82f6", postCount: 2 },
  { id: "c3", slug: "devops", name: "DevOps", icon: "⚙️", color: "#10b981", postCount: 1 },
];

const authors = {
  sarah: {
    id: "u1",
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    bio: "Staff engineer writing about AI systems and developer tools.",
    followers: 12400,
  },
  marcus: {
    id: "u2",
    name: "Marcus Rivera",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    bio: "Full-stack developer focused on modern web architecture.",
    followers: 8900,
  },
};

export const posts = [
  {
    id: "p1",
    slug: "future-of-ai-agents",
    title: "The Future of AI Agents in Production",
    excerpt:
      "How teams are moving from chat demos to reliable agent workflows with observability, guardrails, and human-in-the-loop review.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    categoryId: "c1",
    category: categories[0],
    author: authors.sarah,
    views: 48200,
    likes: 318,
    readTime: 8,
    featured: true,
    publishedAt: "May 10, 2026",
    tags: ["agents", "llm", "production"],
    content:
      "AI agents are no longer experimental side projects.\n\nTeams shipping production workflows need tracing, evaluation datasets, and rollback paths when models drift.\n\nStart with a narrow task, measure success with real user outcomes, and expand scope only after reliability metrics stabilize.",
  },
  {
    id: "p2",
    slug: "astro-ssr-guide",
    title: "A Practical Guide to Astro SSR",
    excerpt:
      "SSR with Astro and the Node adapter gives you dynamic pages without giving up islands architecture for interactive UI.",
    coverImage: "https://images.unsplash.com/photo-1461740680854-674023f707b2?w=1200&q=80",
    categoryId: "c2",
    category: categories[1],
    author: authors.marcus,
    views: 29100,
    likes: 204,
    readTime: 6,
    featured: true,
    publishedAt: "May 8, 2026",
    tags: ["astro", "ssr", "node"],
    content:
      "Astro SSR renders pages on each request while keeping most UI static.\n\nPair it with a Node adapter for standalone deployment and proxy routes for backend APIs.\n\nThis pattern works well when content is mostly public but needs personalization at the edge.",
  },
  {
    id: "p3",
    slug: "kubernetes-cost-controls",
    title: "Kubernetes Cost Controls That Actually Stick",
    excerpt:
      "Rightsizing, autoscaling policies, and team-level budgets can cut cluster spend without slowing delivery.",
    coverImage: "https://images.unsplash.com/photo-1667372393119-3d21c14f140a?w=1200&q=80",
    categoryId: "c3",
    category: categories[2],
    author: authors.sarah,
    views: 17800,
    likes: 142,
    readTime: 7,
    featured: false,
    publishedAt: "May 5, 2026",
    tags: ["kubernetes", "finops"],
    content:
      "Most overspend comes from idle capacity and oversized requests.\n\nSet requests/limits from observed usage, enforce namespace quotas, and review monthly with service owners.\n\nVisibility beats one-time cleanup every time.",
  },
  {
    id: "p4",
    slug: "edge-caching-patterns",
    title: "Edge Caching Patterns for Content Sites",
    excerpt:
      "Stale-while-revalidate, segmented caches, and selective invalidation keep pages fast without stale content nightmares.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    categoryId: "c2",
    category: categories[1],
    author: authors.marcus,
    views: 22100,
    likes: 167,
    readTime: 5,
    featured: false,
    publishedAt: "May 2, 2026",
    tags: ["cdn", "performance"],
    content:
      "Edge caches should be designed around content volatility.\n\nUse short TTLs for personalized routes and longer TTLs for article pages with tag-based purge.\n\nMeasure cache hit ratio alongside TTFB to catch regressions early.",
  },
  {
    id: "p5",
    slug: "prompt-engineering-basics",
    title: "Prompt Engineering Basics for App Teams",
    excerpt:
      "Structured prompts, few-shot examples, and evaluation harnesses help product teams ship LLM features with confidence.",
    coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
    categoryId: "c1",
    category: categories[0],
    author: authors.sarah,
    views: 35600,
    likes: 289,
    readTime: 9,
    featured: false,
    publishedAt: "Apr 28, 2026",
    tags: ["prompting", "evaluation"],
    content:
      "Treat prompts like code: version them, test them, and review changes.\n\nDefine output schemas and add automated checks for format and safety constraints.\n\nSmall, focused prompts outperform giant catch-all instructions.",
  },
  {
    id: "p6",
    slug: "typescript-utility-types",
    title: "TypeScript Utility Types You Should Know",
    excerpt:
      "Pick, Omit, Partial, and Record cover most API modeling needs when designing frontend contracts.",
    coverImage: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&q=80",
    categoryId: "c2",
    category: categories[1],
    author: authors.marcus,
    views: 14300,
    likes: 98,
    readTime: 4,
    featured: false,
    publishedAt: "Apr 22, 2026",
    tags: ["typescript", "types"],
    content:
      "Utility types reduce duplication in shared DTOs.\n\nCombine them with generics for reusable form and table components.\n\nKeep domain types close to API clients so refactors stay safe.",
  },
];

const commentsByPost = {
  p1: [
    {
      id: "cm1",
      content: "Great breakdown of production guardrails.",
      likes: 12,
      createdAt: "May 11, 2026",
      author: { name: "Alex Kim", avatar: "https://i.pravatar.cc/150?u=alex" },
    },
  ],
};

export const users = {
  "alex@techpulse.com": { id: "u0", name: "Alex Admin", role: "admin", email: "alex@techpulse.com" },
  "sarah@techpulse.com": { id: "u1", name: "Sarah Chen", role: "author", email: "sarah@techpulse.com" },
  "marcus@techpulse.com": { id: "u2", name: "Marcus Rivera", role: "author", email: "marcus@techpulse.com" },
};

export function getPostDetail(slug) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;

  const related = posts.filter((p) => p.slug !== slug && p.categoryId === post.categoryId).slice(0, 3);
  return {
    ...post,
    comments: commentsByPost[post.id] || [],
    related,
  };
}

export function listPosts({ limit = 9, page = 1, category = "", q = "" } = {}) {
  let filtered = [...posts];
  if (category) filtered = filtered.filter((p) => p.category?.slug === category);
  if (q) {
    const needle = q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(needle) ||
        p.excerpt.toLowerCase().includes(needle) ||
        p.tags?.some((t) => t.includes(needle))
    );
  }

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / limit));
  const start = (page - 1) * limit;

  return { posts: filtered.slice(start, start + limit), total, pages, page };
}

export function mockAPI(endpoint, options = {}) {
  const method = options.method || "GET";
  const [path, query = ""] = endpoint.split("?");
  const params = Object.fromEntries(new URLSearchParams(query));

  if (path === "/api/posts/featured") {
    return { posts: posts.filter((p) => p.featured) };
  }

  if (path === "/api/posts") {
    return listPosts({
      limit: Number(params.limit) || 9,
      page: Number(params.page) || 1,
      category: params.category || "",
      q: params.q || "",
    });
  }

  const postMatch = path.match(/^\/api\/posts\/([^/]+)$/);
  if (postMatch && method === "GET") {
    const post = getPostDetail(postMatch[1]);
    if (!post) throw new Error("Post not found");
    return post;
  }

  const likeMatch = path.match(/^\/api\/posts\/([^/]+)\/like$/);
  if (likeMatch && method === "PATCH") {
    const post = posts.find((p) => p.slug === likeMatch[1]);
    if (!post) throw new Error("Post not found");
    post.likes += 1;
    return { likes: post.likes };
  }

  if (path === "/api/categories") {
    return { categories };
  }

  const categoryMatch = path.match(/^\/api\/categories\/([^/]+)$/);
  if (categoryMatch) {
    const category = categories.find((c) => c.slug === categoryMatch[1]);
    if (!category) throw new Error("Category not found");
    return category;
  }

  if (path === "/api/analytics/top-posts") {
    return { posts: [...posts].sort((a, b) => b.views - a.views).slice(0, 5) };
  }

  if (path === "/api/auth/login" && method === "POST") {
    const { email, password } = JSON.parse(options.body || "{}");
    const user = users[email];
    if (!user || password !== "password123") throw new Error("Invalid email or password");
    return { token: `mock-token-${user.id}`, user };
  }

  if (path === "/api/auth/register" && method === "POST") {
    const body = JSON.parse(options.body || "{}");
    return {
      token: "mock-token-new",
      user: { id: "u99", name: body.name || "New User", email: body.email, role: "reader" },
    };
  }

  throw new Error(`No mock for ${method} ${endpoint}`);
}
