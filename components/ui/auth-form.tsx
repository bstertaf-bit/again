"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    const res = await fetch(`/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      toast.error(data.error || "Authentication failed");
      return;
    }

    toast.success(mode === "login" ? "Welcome back!" : "Account created");
    router.push("/dashboard/feed");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {mode === "register" && (
        <>
          <input required name="name" placeholder="Full name" className="w-full rounded-xl border border-white/20 bg-white/10 p-3" />
          <div className="grid grid-cols-2 gap-3">
            <input required name="country" placeholder="Country" className="rounded-xl border border-white/20 bg-white/10 p-3" />
            <input required name="school" placeholder="School" className="rounded-xl border border-white/20 bg-white/10 p-3" />
          </div>
          <input required type="number" name="year" placeholder="Year" className="w-full rounded-xl border border-white/20 bg-white/10 p-3" />
          <textarea name="bio" placeholder="Bio" className="w-full rounded-xl border border-white/20 bg-white/10 p-3" />
        </>
      )}
      <input required type="email" name="email" placeholder="Email" className="w-full rounded-xl border border-white/20 bg-white/10 p-3" />
      <input required type="password" name="password" placeholder="Password" className="w-full rounded-xl border border-white/20 bg-white/10 p-3" />
      <button disabled={loading} className="w-full rounded-xl bg-brand-500 p-3 font-semibold text-white disabled:opacity-60">
        {loading ? "Please wait..." : mode === "login" ? "Login" : "Create account"}
      </button>
    </form>
  );
}
