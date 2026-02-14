import { CasesHero } from "@/components/cases/CasesHero";
import { CasesList } from "@/components/cases/CasesList";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-background">
      <CasesHero />
      <CasesList />
      <CtaBlock headline="See Your Pattern?" buttonText="Solve It Now" />
    </main>
  );
}
