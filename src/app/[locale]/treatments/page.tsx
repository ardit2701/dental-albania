import { getTranslations, setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "treatments" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

const TREATMENT_IMAGES = [
  "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=70",
  "/clinic/clinic-0122.jpg",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=70",
  "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=70",
  "/clinic/clinic-0120.jpg",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=70",
];

export default async function TreatmentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("treatments");

  const treatments = [
    {
      key: "implants",
      img: TREATMENT_IMAGES[0],
      href: `/${locale}/treatments/dental-implants`,
    },
    {
      key: "crowns",
      img: TREATMENT_IMAGES[1],
      href: `/${locale}/treatments/crowns`,
    },
    {
      key: "veneers",
      img: TREATMENT_IMAGES[2],
      href: `/${locale}/treatments/veneers`,
    },
    {
      key: "allOn4",
      img: TREATMENT_IMAGES[3],
      href: `/${locale}/treatments/all-on-4`,
    },
    {
      key: "allOn6",
      img: TREATMENT_IMAGES[4],
      href: `/${locale}/treatments/all-on-6`,
    },
    {
      key: "orthodontics",
      img: TREATMENT_IMAGES[5],
      href: `/${locale}/treatments/orthodontics`,
    },
    {
      key: "whitening",
      img: TREATMENT_IMAGES[6],
      href: `/${locale}/treatments/whitening`,
    },
    {
      key: "cleaning",
      img: TREATMENT_IMAGES[7],
      href: `/${locale}/treatments/cleaning`,
    },
  ];

  return (
    <>
      <PageHero
        imageSrc="/clinic/clinic-0121.jpg"
        imageAlt={t("heroImageAlt")}
        badge={t("badge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        variant={2}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {treatments.map((tr) => (
              <div
                key={tr.key}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Photo header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tr.img}
                    alt={t(`${tr.key}.title` as any)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{t(`${tr.key}.title` as any)}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{t(`${tr.key}.desc` as any)}</p>
                  <ul className="space-y-2 mb-5">
                    {([0, 1, 2, 3] as const).map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[#0284c7] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {t(`${tr.key}.benefits.${i}` as any)}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tr.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold text-sm rounded-xl transition-colors"
                  >
                    {t("learnMore")}
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
