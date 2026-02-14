import { ImplHero } from "@/components/implementation/ImplHero";
import { ExecutionServices } from "@/components/implementation/ExecutionServices";
import { DeliveryDiscipline } from "@/components/implementation/DeliveryDiscipline";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function ImplementationPage() {
  return (
    <main className="min-h-screen bg-background">
      <ImplHero />
      <ExecutionServices />
      <DeliveryDiscipline />
      <CtaBlock headline="Build It Right. The First Time." buttonText="Start Implementation" />
    </main>
  );
}
