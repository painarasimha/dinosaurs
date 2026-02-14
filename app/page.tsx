import { Hero } from "@/components/ui/Hero";
import { ProblemSection } from "@/components/home/ProblemSection";
import { PositioningSection } from "@/components/home/PositioningSection";
import { FrameworkSection } from "@/components/home/FrameworkSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProofSection } from "@/components/home/ProofSection";
import { IdealClients } from "@/components/home/IdealClients";
import { CtaBlock } from "@/components/ui/CtaBlock";
import { TrustStrip } from "@/components/ui/TrustStrip"; // Keep trust strip as social proof

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <PositioningSection />
      <FrameworkSection />
      <ServicesGrid />
      <ProofSection />
      <IdealClients />
      <CtaBlock />
    </main>
  );
}
