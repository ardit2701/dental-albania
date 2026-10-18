import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ortodonti",
    description: "Trajtim ortodontik profesional. Aparate dentare dhe aligners invisalign në Tiranë, Shqipëri.",
  };
}

export default async function OrthodonticsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const benefits = [
    "Rreshtim i përsosur i dhëmbëve",
    "Aparate tradicionale metalike & ceramike",
    "Aligners transparentë (Invisalign)",
    "Trajtim për të gjitha moshat",
    "Kontroll i rregullt çdo 4-6 javë",
    "Rezultate të dukshme nga 6 muajt e parë",
  ];

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Ortodonti profesionale"
        badge="😁 Ortodonti"
        title="Dhëmbë të Rreshtuar Perfektisht"
        subtitle="Aparate dentare dhe aligners transparentë për një buzëqeshje të bukur dhe të shëndetshme."
        variant={2}
        cta={{ label: "Konsultim Falas", href: "#contact" }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Çfarë ofrojmë</h2>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Ortodontia moderne mundëson rreshtimin e dhëmbëve pa ndikuar negativisht në jetën tuaj të përditshme.
                Me teknologjinë e fundit dhe ortodontistët tanë të specializuar, çdo trajtim planifikohet me saktësi.
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 p-3 bg-[#f0fdfa] rounded-xl">
                    <div className="w-6 h-6 bg-[#0d9488] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              {[
                { icon: "🔩", title: "Aparate Metalike", desc: "Zgjidhja klasike dhe më e efektshme. Idealë për raste komplekse." },
                { icon: "🪄", title: "Aparate Ceramike", desc: "Diskrete dhe estetike. Efektivitet i njëjtë me aparatet metalike." },
                { icon: "✨", title: "Aligners Transparentë", desc: "Pothuajse të padukshëm. Hiqen gjatë ngrënies dhe pastrimeve." },
              ].map((opt) => (
                <div key={opt.title} className="bg-gradient-to-br from-teal-50 to-white border border-teal-100 rounded-2xl p-5 flex gap-4 items-start">
                  <span className="text-3xl">{opt.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-sm">{opt.title}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{opt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0d9488] hover:bg-[#0f766e] text-white font-bold text-base rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            >
              Cakto Konsultim Falas
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
