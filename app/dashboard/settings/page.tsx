import { SectionHeader } from "@/components/dashboard/section-header";

export default function SettingsPage() {
  return (
    <div>
      <SectionHeader title="Settings" subtitle="Manage account preferences and security." />
      <div className="glass rounded-2xl p-6">Settings center coming with notification and privacy toggles.</div>
    </div>
  );
}
