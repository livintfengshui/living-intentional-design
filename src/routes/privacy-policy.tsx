import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — LIVINT" },
      {
        name: "description",
        content: "How LIVINT handles personal data submitted through enquiries and this website.",
      },
      { property: "og:title", content: "Privacy Policy — LIVINT" },
      {
        property: "og:description",
        content: "LIVINT privacy policy — data handling for enquiries and website visitors.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.privacy.title} body={t.legal.privacy.body} back={t.legal.back} />
  );
}
