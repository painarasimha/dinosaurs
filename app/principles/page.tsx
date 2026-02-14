import { PrinciplesHero } from "@/components/principles/PrinciplesHero";
import { OsGrid } from "@/components/principles/OsGrid";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function PrinciplesPage() {
  return (
    <main className="min-h-screen bg-background">
      <PrinciplesHero />
      <OsGrid />
      <CtaBlock headline="Demand Higher Standards" buttonText="Vet Our Process" />
    </main>
  );
}
