import { SectionHeader } from "@/components/dashboard/section-header";

export default function ProfilePage() {
  return (
    <div>
      <SectionHeader title="Profile" subtitle="Your public identity in the ENSAM African Network." />
      <div className="glass rounded-2xl p-6">Profile data is loaded from /api/auth/me and can be expanded with edit forms.</div>
    </div>
  );
}
