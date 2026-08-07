import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/legal-page";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/cookies-policy")({
  head: () => ({
    meta: [
      { title: "Cookies Policy — LIVINT" },
      {
        name: "description",
        content: "Information about the cookies used on the LIVINT — Living Interiors website.",
      },
      { property: "og:title", content: "Cookies Policy — LIVINT" },
      {
        property: "og:description",
        content: "Information about cookies used on the LIVINT website.",
      },
    ],
  }),
  component: CookiesPolicy,
});

function CookiesPolicy() {
  const { t } = useI18n();
  return (
    <LegalPage title={t.legal.cookies.title} body={t.legal.cookies.body} back={t.legal.back} />
  );
}
