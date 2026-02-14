import { ContactHero } from "@/components/contact/ContactHero";
import { AuditForm } from "@/components/contact/AuditForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
      <AuditForm />
    </main>
  );
}
