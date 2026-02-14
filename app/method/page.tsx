import { MethodHero } from "@/components/method/MethodHero";
import { FullFramework } from "@/components/method/FullFramework";
import { FrameworkArtifacts } from "@/components/method/FrameworkArtifacts";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function MethodPage() {
  return (
    <main className="min-h-screen bg-background">
      <MethodHero />
      <FullFramework />
      <FrameworkArtifacts />
      <CtaBlock headline="Stop Guessing. Start Architecting." buttonText="See The Roadmap" />
    </main>
  );
}
