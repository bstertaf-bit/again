import { SectionHeader } from "@/components/dashboard/section-header";
import { SimpleListPanel } from "@/components/dashboard/simple-list-panel";

export default function NetworkPage() {
  return (
    <div>
      <SectionHeader title="Network" subtitle="Build trusted academic and professional connections." />
      <SimpleListPanel endpoint="/api/connections/request" listKey="connections" titleField="receiverName" descriptionField="status" />
    </div>
  );
}
