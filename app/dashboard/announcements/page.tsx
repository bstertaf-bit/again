import { SectionHeader } from "@/components/dashboard/section-header";
import { SimpleListPanel } from "@/components/dashboard/simple-list-panel";

export default function AnnouncementsPage() {
  return (
    <div>
      <SectionHeader title="Announcements" subtitle="Important updates and opportunities." />
      <SimpleListPanel endpoint="/api/announcements" listKey="announcements" titleField="title" descriptionField="content" />
    </div>
  );
}
