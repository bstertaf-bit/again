import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";
import { AuthForm } from "@/components/ui/auth-form";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <GlassCard className="w-full max-w-lg">
        <h1 className="mb-6 text-2xl font-semibold">Create your ENSAM account</h1>
        <AuthForm mode="register" />
        <p className="mt-4 text-sm text-slate-300">
          Already a member? <Link href="/auth/login" className="text-brand-100 underline">Sign in</Link>
        </p>
      </GlassCard>
    </div>
  );
}
