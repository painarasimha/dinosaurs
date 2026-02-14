import { WhoWeAre } from "@/components/about/WhoWeAre";
import { MissionSection } from "@/components/about/MissionSection";
import { Differentiators } from "@/components/about/Differentiators";
import { OperatingPrinciples } from "@/components/about/OperatingPrinciples";
import { Founders } from "@/components/about/Founders";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <WhoWeAre />
      <MissionSection />
      <Differentiators />
      <OperatingPrinciples />
      <Founders />
      <CtaBlock headline="Partner With Intelligence" buttonText="Inquire for Partnership" />
    </main>
  );
}
