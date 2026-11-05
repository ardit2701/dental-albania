import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "beforeAfter" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

const CASE_EMOJIS = ["🦷", "✨", "🏆", "👑", "😁", "⭐"];
const CASE_COLORS = [
  "from-[#0284c7] to-[#0c4a6e]",
  "from-[#0c4a6e] to-[#0369a1]",
  "from-[#0369a1] to-[#0284c7]",
  "from-[#0284c7] to-[#0369a1]",
  "from-[#0c4a6e] to-[#0284c7]",
  "from-[#0369a1] to-[#0c4a6e]",
];

export default async function BeforeAfterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("beforeAfter");

  const cases = [0,1,2,3,4,5].map((i) => ({
    emoji: CASE_EMOJIS[i],
    color: CASE_COLORS[i],
    before: (t as any)(`caseDetails.${i}.before`),
    after: (t as any)(`caseDetails.${i}.after`),
  }));

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"
        imageAlt={t("metaTitle")}
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        variant={3}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-2 h-48">
                  <div className="relative bg-gradient-to-br from-gray-300 to-gray-400 flex flex-col items-center justify-center">
                    <span className="text-4xl opacity-40">{c.emoji}</span>
                    <span className="absolute top-2 left-2 bg-white/80 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full">{t("before")}</span>
                    <span className="absolute bottom-2 text-xs text-gray-600 text-center px-2">{c.before}</span>
                  </div>
                  <div className={`relative bg-gradient-to-br ${c.color} flex flex-col items-center justify-center`}>
                    <span className="text-4xl">{c.emoji}</span>
                    <span className="absolute top-2 right-2 bg-white/90 text-[#0284c7] text-xs font-bold px-2 py-0.5 rounded-full">{t("after")}</span>
                    <span className="absolute bottom-2 text-xs text-white text-center px-2">{c.after}</span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm font-semibold text-gray-800">{t(`cases.${i}`)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
