import { SectionHeader } from "@/components/dashboard/section-header";
import { SimpleListPanel } from "@/components/dashboard/simple-list-panel";

export default function GroupsPage() {
  return (
    <div>
      <SectionHeader title="Groups" subtitle="Join country or topic-based groups." />
      <SimpleListPanel endpoint="/api/groups" listKey="groups" titleField="name" descriptionField="description" />
    </div>
  );
}
