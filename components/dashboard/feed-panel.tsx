"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";

type Post = { id: string; title: string; content: string; category: string; author: { name: string }; createdAt: string };

export function FeedPanel() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data.posts || []);
    setLoading(false);
  }

  async function submit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok) return toast.error(data.error || "Failed to create post");
    toast.success("Post published");
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4">
      <form action={submit} className="glass space-y-3 rounded-2xl p-4">
        <input required name="title" placeholder="Post title" className="w-full rounded-xl border border-white/20 bg-white/10 p-3" />
        <textarea required name="content" placeholder="Share your experience..." className="w-full rounded-xl border border-white/20 bg-white/10 p-3" />
        <select name="category" className="rounded-xl border border-white/20 bg-white/10 p-3">
          <option value="EXPERIENCE">Experience</option>
          <option value="ADVICE">Advice</option>
          <option value="HOUSING">Housing</option>
          <option value="QUESTION">Question</option>
        </select>
        <button className="rounded-xl bg-brand-500 px-4 py-2">Publish</button>
      </form>

      {loading && (
        <div className="space-y-3">
          <Skeleton className="h-24" />
          <Skeleton className="h-24" />
        </div>
      )}

      {posts.map((post) => (
        <article key={post.id} className="glass rounded-2xl p-4">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="mt-2 text-slate-300">{post.content}</p>
          <p className="mt-3 text-xs uppercase tracking-wide text-brand-100">
            {post.category} · {post.author.name}
          </p>
        </article>
      ))}
    </div>
  );
}
