import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-12">
      <div className="grid w-full gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-brand-500/20 px-4 py-1 text-brand-100">Built for ENSAM African students</p>
          <h1 className="bg-hero-gradient bg-clip-text text-5xl font-bold text-transparent">Share, Connect, Thrive Together</h1>
          <p className="text-slate-300">
            A premium community platform to share experiences, housing opportunities, and mentorship across ENSAM campuses.
          </p>
          <div className="flex gap-4">
            <Link href="/auth/register" className="rounded-xl bg-brand-500 px-5 py-3 font-medium text-white transition hover:bg-brand-700">
              Join now
            </Link>
            <Link href="/auth/login" className="rounded-xl border border-white/30 px-5 py-3 font-medium hover:bg-white/10">
              Sign in
            </Link>
          </div>
        </div>
        <GlassCard>
          <h3 className="mb-4 text-2xl font-semibold">What you can do</h3>
          <ul className="space-y-3 text-slate-200">
            <li>• Publish internship, study and life-abroad experiences</li>
            <li>• Ask questions and get peer advice fast</li>
            <li>• Find trusted housing offers or requests</li>
            <li>• Build your network and join country/topic groups</li>
          </ul>
        </GlassCard>
      </div>
    </div>
  );
}
