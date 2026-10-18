import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Trajtimet",
    description: "Gama e plotë e trajtimeve dentare në KOKONA Dental and Maxillofacial Clinic.",
  };
}

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function TreatmentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const treatments = [
    {
      icon: "🦷",
      title: t("implants.title"),
      desc: t("implants.desc"),
      benefits: [
        t("implants.benefits.0"),
        t("implants.benefits.1"),
        t("implants.benefits.2"),
        t("implants.benefits.3"),
      ],
      href: `/${locale}/treatments/dental-implants`,
      color: "from-[#0d9488] to-[#134e4a]",
    },
    {
      icon: "👑",
      title: t("crowns.title"),
      desc: t("crowns.desc"),
      benefits: [
        t("crowns.benefits.0"),
        t("crowns.benefits.1"),
        t("crowns.benefits.2"),
        t("crowns.benefits.3"),
      ],
      href: `/${locale}/treatments/crowns`,
      color: "from-[#134e4a] to-[#0f766e]",
    },
    {
      icon: "✨",
      title: t("veneers.title"),
      desc: t("veneers.desc"),
      benefits: [
        t("veneers.benefits.0"),
        t("veneers.benefits.1"),
        t("veneers.benefits.2"),
        t("veneers.benefits.3"),
      ],
      href: `/${locale}/treatments/veneers`,
      color: "from-[#0f766e] to-[#0d9488]",
    },
    {
      icon: "🏆",
      title: t("allOn6.title"),
      desc: t("allOn6.desc"),
      benefits: [
        t("allOn6.benefits.0"),
        t("allOn6.benefits.1"),
        t("allOn6.benefits.2"),
        t("allOn6.benefits.3"),
      ],
      href: `/${locale}/treatments/all-on-6`,
      color: "from-[#0d9488] to-[#0f766e]",
    },
  ];

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Trajtimet dentare KOKONA"
        badge="🦷 Trajtimet Tona"
        title="Trajtimet Dentare & Maxillofaciale"
        subtitle="Ofrojmë gamën e plotë të trajtimeve me teknologji të fundit dhe mjekë të specializuar."
        variant={2}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {treatments.map((treatment) => (
              <div
                key={treatment.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-br ${treatment.color} flex items-center justify-center`}>
                  <span className="text-6xl">{treatment.icon}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{treatment.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{treatment.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {treatment.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#0d9488] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={treatment.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold text-sm rounded-xl transition-colors"
                  >
                    Mëso Më Shumë
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
