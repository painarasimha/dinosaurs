import { TransHero } from "@/components/transformation/TransHero";
import { StrategicFocus } from "@/components/transformation/StrategicFocus";
import { PhaseLadder } from "@/components/transformation/PhaseLadder";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function TransformationPage() {
  return (
    <main className="min-h-screen bg-background">
      <TransHero />
      <StrategicFocus />
      <PhaseLadder />
      <CtaBlock headline="Design Your Future State" buttonText="Start Architecture" />
    </main>
  );
}
