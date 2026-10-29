import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Zbardhim Dhëmbësh",
    description: "Zbardhim profesional i dhëmbëve. Buzëqeshje e ndritshme brenda 1 ore në Tiranë, Shqipëri.",
  };
}

export default async function WhiteningPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const faqs = [
    { q: "Sa kohë zgjat efekti?", a: "Efekti zgjat 1-3 vjet me mirëmbajtje të duhur dhe pastrim të rregullt." },
    { q: "A dhemb procedura?", a: "Jo, procedura është plotësisht e dhimbshme. Disa pacientë ndjejnë ndjeshmëri të lehtë kalimtare." },
    { q: "Sa tone ndriçohen dhëmbët?", a: "Mesatarisht 6-10 tone më të ndritshëm krahasuar me ngjyrën fillestare." },
    { q: "A mund ta bëj nëse kam kurora?", a: "Zbardhimi nuk ndikon tek kurora apo faseta. Do t'ju këshillojmë gjatë konsultimit." },
  ];

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Zbardhim profesional dhëmbësh"
        badge="✨ Zbardhim Dhëmbësh"
        title="Buzëqeshje e Ndritshme në 1 Orë"
        subtitle="Zbardhim profesional me teknologji LED dhe gel të certifikuar. Rezultate të menjëhershme dhe të sigurta."
        variant={1}
        cta={{ label: "Rezervo Tani", href: "#contact" }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Zgjidhjet Tona</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: "💡",
                    title: "Zbardhim në Klinikë (Zoom)",
                    desc: "Procedurë 1-orëshe me dritë LED. Rezultate menjëherë të dukshme.",
                    badge: "Më Popullor",
                  },
                  {
                    icon: "🏠",
                    title: "Kit për Shtëpi",
                    desc: "Kallëpe të personalizuara + gel profesional. Trajtim 2-javësh.",
                    badge: null,
                  },
                  {
                    icon: "⚡",
                    title: "Kombinim (Klinikë + Shtëpi)",
                    desc: "Rezultati maksimal: fillim në klinikë, mirëmbajtje në shtëpi.",
                    badge: "Rezultat Max",
                  },
                ].map((opt) => (
                  <div key={opt.title} className="border border-gray-100 rounded-2xl p-5 flex gap-4 items-start hover:border-sky-200 hover:bg-sky-50/30 transition-colors">
                    <span className="text-2xl">{opt.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 text-sm">{opt.title}</h3>
                        {opt.badge && (
                          <span className="bg-[#0284c7] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{opt.badge}</span>
                        )}
                      </div>
                      <p className="text-gray-500 text-xs">{opt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Pyetje të Shpeshta</h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div key={faq.q} className="bg-gray-50 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{faq.q}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={`/${locale}/contact`}
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
