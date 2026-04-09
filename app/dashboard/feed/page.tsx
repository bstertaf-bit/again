import { FeedPanel } from "@/components/dashboard/feed-panel";
import { SectionHeader } from "@/components/dashboard/section-header";

export default function FeedPage() {
  return (
    <div>
      <SectionHeader title="Community Feed" subtitle="Experiences, questions and practical advice from peers." />
      <FeedPanel />
    </div>
  );
}
