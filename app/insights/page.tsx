import { InsightsHero } from "@/components/insights/InsightsHero";
import { InsightsGrid } from "@/components/insights/InsightsGrid";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-background">
      <InsightsHero />
      <InsightsGrid />
      <CtaBlock headline="Subscribe to Intelligence" buttonText="Join The List" />
    </main>
  );
}
