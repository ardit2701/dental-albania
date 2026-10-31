import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "doctorsPage" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

const DOCTOR_STATIC = [
  {
    name: "Dr. Arlind Myftari",
    title: "DMD, MD",
    photo: "/doctors/arlind-myftari.png",
    accent: "#003087",
    tagClass: "bg-blue-50 text-blue-700 border-blue-100",
    educationCount: 5,
  },
  {
    name: "Dr. Odeta Shehu",
    title: "DMD",
    photo: null,
    accent: "#0284c7",
    tagClass: "bg-sky-50 text-sky-700 border-sky-100",
    educationCount: 4,
  },
];

export default async function DoctorsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("doctorsPage");

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=85"
        imageAlt={t("badge")}
        badge={`👨‍⚕️ ${t("badge")}`}
        title={t("title")}
        subtitle={t("subtitle")}
        variant={2}
        cta={{ label: t("appointmentBtn"), href: "#contact" }}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {DOCTOR_STATIC.map((doc, i) => {
              const educationItems = Array.from({ length: doc.educationCount }, (_, j) => ({
                label: t(`doctors.${i}.education.${j}.label`),
                value: t(`doctors.${i}.education.${j}.value`),
              }));

              const expertiseItems: string[] = [0, 1, 2, 3, 4, 5, 6, 7].map((j) =>
                t(`doctors.${i}.expertise.${j}`)
              );

              return (
                <div
                  key={doc.name}
                  className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Photo */}
                  <div className="relative w-full lg:w-80 h-96 lg:h-auto shrink-0 bg-gradient-to-br from-sky-800 to-sky-900">
                    {doc.photo && (
                      <>
                        <Image
                          src={doc.photo}
                          alt={doc.name}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1024px) 100vw, 320px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                        <div className="absolute bottom-4 left-4 lg:hidden">
                          <p className="text-white font-bold text-xl drop-shadow">{doc.name}</p>
                          <p className="text-white/80 text-sm">{doc.title}</p>
                        </div>
                      </>
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold text-sky-700 px-3 py-1.5 rounded-full shadow">
                      {t(`doctors.${i}.experience`)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 lg:p-10">
                    <div className="hidden lg:block mb-4">
                      <h2 className="text-2xl font-extrabold text-gray-900">{doc.name}</h2>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-gray-400 text-sm font-medium">{doc.title}</span>
                        <span className="text-gray-300">·</span>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${doc.tagClass}`}>
                          {t(`doctors.${i}.specialty`)}
                        </span>
                      </div>
                    </div>

                    <div className="lg:hidden mb-3">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${doc.tagClass}`}>
                        {t(`doctors.${i}.specialty`)}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-7">{t(`doctors.${i}.bio`)}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                      <div>
                        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                          {t("educationLabel")}
                        </h3>
                        <ul className="space-y-3">
                          {educationItems.map((e) => (
                            <li key={e.label} className="flex gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: doc.accent }} />
                              <div>
                                <p className="text-xs font-semibold text-gray-800">{e.label}</p>
                                <p className="text-xs text-gray-500 leading-relaxed">{e.value}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                          {t("expertiseLabel")}
                        </h3>
                        <ul className="space-y-2">
                          {expertiseItems.map((e) => (
                            <li key={e} className="flex items-center gap-2 text-xs text-gray-600">
                              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: doc.accent }}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-7 pt-6 border-t border-gray-100">
                      <a
                        href={`/${locale}/contact`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                        style={{ backgroundColor: doc.accent }}
                      >
                        {t("appointmentBtn")}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
