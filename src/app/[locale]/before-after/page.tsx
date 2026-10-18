import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Para & Pas",
    description: "Shikoni transformimet reale të pacientëve tanë.",
  };
}

const CASES = [
  { emoji: "🦷", treatment: "Implante Dentare", before: "Dhëmb i humbur", after: "Implant titanium", color: "from-[#0d9488] to-[#134e4a]" },
  { emoji: "✨", treatment: "Faseta Porcelani", before: "Dhëmbë të çngjyrosur", after: "Buzëqeshje e bardhë", color: "from-[#134e4a] to-[#0f766e]" },
  { emoji: "🏆", treatment: "All-on-6", before: "Dhëmbë të dëmtuar", after: "Arkadë e re", color: "from-[#0f766e] to-[#0d9488]" },
  { emoji: "👑", treatment: "Kurora Dentare", before: "Dhëmb i thyer", after: "Kurorë porcelani", color: "from-[#0d9488] to-[#0f766e]" },
  { emoji: "😁", treatment: "Zbardhim", before: "Njolla kafeje", after: "Dhëmbë të bardhë", color: "from-[#134e4a] to-[#0d9488]" },
  { emoji: "⭐", treatment: "Ortodonti", before: "Dhëmbë të shtrembër", after: "Rreshtim perfekt", color: "from-[#0f766e] to-[#134e4a]" },
];

export default async function BeforeAfterPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("beforeAfter");

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Rezultate reale para dhe pas trajtimit"
        badge="📸 Para & Pas"
        title="Transformimet Reale të Pacientëve Tanë"
        subtitle="Çdo rast tregon punën e ekipit tonë dhe besimin e pacientëve."
        variant={3}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASES.map((c, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-2 h-48">
                  <div className="relative bg-gradient-to-br from-gray-300 to-gray-400 flex flex-col items-center justify-center">
                    <span className="text-4xl opacity-40">{c.emoji}</span>
                    <span className="absolute top-2 left-2 bg-white/80 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full">PARA</span>
                    <span className="absolute bottom-2 text-xs text-gray-600 text-center px-2">{c.before}</span>
                  </div>
                  <div className={`relative bg-gradient-to-br ${c.color} flex flex-col items-center justify-center`}>
                    <span className="text-4xl">{c.emoji}</span>
                    <span className="absolute top-2 right-2 bg-white/90 text-[#0d9488] text-xs font-bold px-2 py-0.5 rounded-full">PAS</span>
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
