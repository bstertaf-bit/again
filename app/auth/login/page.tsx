import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { AuthForm } from "@/components/ui/auth-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <GlassCard className="w-full max-w-md">
        <h1 className="mb-6 text-2xl font-semibold">Welcome back</h1>
        <AuthForm mode="login" />
        <p className="mt-4 text-sm text-slate-300">
          New here? <Link href="/auth/register" className="text-brand-100 underline">Create account</Link>
        </p>
      </GlassCard>
    </div>
  );
}
