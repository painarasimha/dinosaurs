import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { VerticalsGrid } from "@/components/industries/VerticalsGrid";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-background">
      <IndustriesHero />
      <VerticalsGrid />
      <CtaBlock headline="Apply Sector Intelligence" buttonText="Consult on Vertical" />
    </main>
  );
}
