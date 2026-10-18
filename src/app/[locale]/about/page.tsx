import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rreth Nesh",
    description: "Mësoni më shumë rreth KOKONA Dental and Maxillofacial Clinic - klinika dentare lider në Shqipëri.",
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Klinika KOKONA Dental"
        badge="🏥 Rreth Nesh"
        title={t("title")}
        subtitle={t("subtitle")}
        variant={1}
      />

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Historia Jonë</h2>
              <p className="text-gray-600 leading-relaxed">{t("story")}</p>
            </div>
            <div className="bg-gradient-to-br from-[#0d9488] to-[#134e4a] rounded-3xl p-8 text-center aspect-square flex flex-col items-center justify-center">
              <span className="text-8xl mb-4">🏥</span>
              <p className="text-white text-xl font-bold">KOKONA Dental and Maxillofacial Clinic</p>
              <p className="text-[#99f6e4] mt-2">Themeluar 1992</p>
            </div>
          </div>

          <div className="mt-12 bg-[#f0fdfa] rounded-2xl p-8 border border-[#0d9488]/20">
            <h3 className="text-xl font-bold text-[#0d9488] mb-3">Misioni Ynë</h3>
            <p className="text-gray-700 leading-relaxed">{t("mission")}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#134e4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "5,200+", label: "Pacientë të Kënaqur" },
              { value: "15+", label: "Vjet Eksperiencë" },
              { value: "98%", label: "Shkallë Suksesi" },
              { value: "4.9★", label: "Google Reviews" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-extrabold text-[#5eead4] mb-1">{stat.value}</div>
                <div className="text-[#99f6e4] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
