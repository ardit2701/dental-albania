import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Implante Dentare",
    description: "Implante dentare Straumann & Neodent të cilësisë botërore në Tiranë, Shqipëri. Çmime të volitshme.",
  };
}

export default async function DentalImplantsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const benefits = [
    t("implants.benefits.0"),
    t("implants.benefits.1"),
    t("implants.benefits.2"),
    t("implants.benefits.3"),
  ];

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Implante dentare profesionale"
        badge="🔩 Implante Dentare"
        title={t("implants.title")}
        subtitle={t("implants.desc")}
        variant={1}
        cta={{ label: "Konsultim Falas", href: "#contact" }}
      />

      {/* Brand trust bar */}
      <div className="bg-gradient-to-r from-[#041f1e] to-[#0d9488]/90 py-5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center">
          <p className="text-teal-200 text-xs font-semibold uppercase tracking-widest">Punojmë me brendet #1 botërore</p>
          <div className="hidden sm:block w-px h-6 bg-teal-700" />
          <div className="flex items-center gap-8">
            {/* Straumann */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
                  <circle cx="18" cy="18" r="16" fill="#003087" />
                  <path d="M10 18 C10 13 13 10 18 10 C23 10 26 13 26 18 C26 23 23 26 18 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="18" cy="18" r="3" fill="white" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm leading-none">Straumann®</p>
                <p className="text-teal-300 text-[10px]">Swiss Quality · Est. 1954</p>
              </div>
            </div>
            <div className="w-px h-8 bg-teal-700" />
            {/* Neodent */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md shrink-0">
                <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5">
                  <circle cx="18" cy="18" r="16" fill="#00843D" />
                  <path d="M11 25 L11 11 L18 22 L25 11 L25 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm leading-none">Neodent®</p>
                <p className="text-teal-300 text-[10px]">Straumann Group · Brazil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Brand comparison cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {/* Straumann */}
            <div className="border-2 border-blue-100 rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#003087] rounded-xl flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" fill="none" />
                    <path d="M7 12 C7 9 9 7 12 7 C15 7 17 9 17 12 C17 15 15 17 12 17" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                    <circle cx="12" cy="12" r="2" fill="white" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base">Straumann®</h3>
                  <p className="text-blue-600 text-xs font-semibold">Premium · Swiss Made</p>
                </div>
                <span className="ml-auto bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Nr. 1 Botë</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Titanium SLA® Surface — integrim më i shpejtë",
                  "Garanci gjatë gjithë jetës (Lifetime Guarantee)",
                  "Mbi 70 vjet kërkime shkencore",
                  "I disponueshëm në 100+ vende",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Neodent */}
            <div className="border-2 border-green-100 rounded-2xl p-6 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00843D] rounded-xl flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M7 17 L7 7 L12 15 L17 7 L17 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base">Neodent®</h3>
                  <p className="text-green-600 text-xs font-semibold">Straumann Group · Raport i Lartë Cilësi/Çmim</p>
                </div>
                <span className="ml-auto bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Best Value</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Pjesë e grupit Straumann — standarde identike",
                  "Teknologji Acqua Surface® — osseointegrim optimal",
                  "Raport i shkëlqyer cilësi/vlerë pa kompromentuar standardet",
                  "Zgjidhja ideale për All-on-4 / All-on-6",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits + info card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Avantazhet e Implanteve</h2>
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
            <div className="bg-gradient-to-br from-[#0d9488] to-[#134e4a] rounded-3xl p-8 text-center">
              <span className="text-7xl block mb-4">🦷</span>
              <h3 className="text-white text-xl font-bold mb-1">Implante Titanium</h3>
              <p className="text-teal-200 text-sm mb-4">Gradë Mjekësore · ISO Certified</p>
              <div className="space-y-2 text-sm text-left">
                {[
                  { label: "Konsultim", val: "Falas" },
                  { label: "Procedura", val: "1 ditë" },
                  { label: "Garanci", val: "Gjatëjetësor" },
                  { label: "Anestezi", val: "Lokale" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between bg-white/10 rounded-lg px-3 py-2">
                    <span className="text-teal-200">{r.label}</span>
                    <span className="text-white font-bold">{r.val}</span>
                  </div>
                ))}
              </div>
              <p className="text-teal-200 text-xs mt-4">Për çmime kontaktoni klinikën — oferta personalizohet sipas rastit tuaj.</p>
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
