import { HousingPanel } from "@/components/dashboard/housing-panel";
import { SectionHeader } from "@/components/dashboard/section-header";

export default function HousingPage() {
  return (
    <div>
      <SectionHeader title="Housing" subtitle="Publish offers and requests safely within the network." />
      <HousingPanel />
    </div>
  );
}
