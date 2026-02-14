import { AuditHero } from "@/components/audit/AuditHero";
import { WhatWeAudit } from "@/components/audit/WhatWeAudit";
import { AuditModules } from "@/components/audit/AuditModules";
import { AuditDeliverables } from "@/components/audit/AuditDeliverables";
import { WhoNeedsAudit } from "@/components/audit/WhoNeedsAudit";
import { CtaBlock } from "@/components/ui/CtaBlock";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-background">
      <AuditHero />
      <WhatWeAudit />
      <AuditModules />
      <AuditDeliverables />
      <WhoNeedsAudit />
      <CtaBlock headline="Stop Bleeding Cash. Start Diagnosis." buttonText="Book Audit Consultation" />
    </main>
  );
}
