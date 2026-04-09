"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Housing = { id: string; title: string; description: string; location: string; price: number; type: string; user: { name: string } };

export function HousingPanel() {
  const [items, setItems] = useState<Housing[]>([]);

  async function load() {
    const res = await fetch("/api/housing");
    const data = await res.json();
    setItems(data.items || []);
  }

  async function submit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const res = await fetch("/api/housing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok) return toast.error(data.error || "Failed to create listing");
    toast.success("Listing created");
    load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-4">
      <form action={submit} className="glass grid gap-3 rounded-2xl p-4 md:grid-cols-2">
        <input required name="title" placeholder="Title" className="rounded-xl border border-white/20 bg-white/10 p-3" />
        <input required name="location" placeholder="Location" className="rounded-xl border border-white/20 bg-white/10 p-3" />
        <input required name="price" type="number" placeholder="Price" className="rounded-xl border border-white/20 bg-white/10 p-3" />
        <select name="type" className="rounded-xl border border-white/20 bg-white/10 p-3">
          <option value="OFFER">Offer</option>
          <option value="REQUEST">Request</option>
        </select>
        <textarea required name="description" placeholder="Description" className="rounded-xl border border-white/20 bg-white/10 p-3 md:col-span-2" />
        <button className="rounded-xl bg-brand-500 px-4 py-2 md:col-span-2">Publish listing</button>
      </form>

      {items.map((item) => (
        <article key={item.id} className="glass rounded-2xl p-4">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-slate-300">{item.description}</p>
          <p className="mt-2 text-sm text-brand-100">{item.type} · {item.location} · €{item.price}</p>
        </article>
      ))}
    </div>
  );
}
