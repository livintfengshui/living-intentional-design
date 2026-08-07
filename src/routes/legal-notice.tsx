import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/legal-notice")({
  head: () => ({
    meta: [
      { title: "Legal Notice — LIVINT" },
      {
        name: "description",
        content: "Legal notice and terms of use for the LIVINT — Living Interiors website.",
      },
      { property: "og:title", content: "Legal Notice — LIVINT" },
      {
        property: "og:description",
        content: "Legal notice and terms of use for the LIVINT website.",
      },
    ],
  }),
  component: LegalNotice,
});

function LegalNotice() {
  const { t } = useI18n();
  return (
    <LegalPage
      title={t.legal.legalNotice.title}
      body={t.legal.legalNotice.body}
      back={t.legal.back}
    />
  );
}
