import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Faseta Dentare",
    description: "Faseta porcelani në KOKONA Dental and Maxillofacial Clinic. Transformoni buzëqeshjen tuaj.",
  };
}

export default async function VeneersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const benefits = [
    t("veneers.benefits.0"),
    t("veneers.benefits.1"),
    t("veneers.benefits.2"),
    t("veneers.benefits.3"),
  ];

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Faseta dentare Emax"
        badge="✨ Faseta Emax"
        title={t("veneers.title")}
        subtitle={t("veneers.desc")}
        variant={3}
        cta={{ label: "Konsultim Falas", href: "#contact" }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Avantazhet</h2>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 p-3 bg-[#f0fdfa] rounded-xl">
                    <div className="w-6 h-6 bg-[#0284c7] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0369a1] to-[#0284c7] rounded-3xl p-10 text-center">
              <span className="text-8xl block mb-4">✨</span>
              <h3 className="text-white text-xl font-bold mb-2">Faseta Porcelani</h3>
              <p className="text-[#bae6fd] text-sm">Ultra-thin · E-Max · Lumineers</p>
              <div className="mt-6 bg-white/20 rounded-xl p-4">
                <p className="text-[#bae6fd] text-sm">Kontaktoni klinikën për ofertë personale</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Cakto Konsultim Falas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
