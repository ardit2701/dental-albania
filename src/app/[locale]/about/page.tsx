import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const stats = [0, 1, 2, 3].map((i) => ({
    value: t(`stats.${i}.value`),
    label: t(`stats.${i}.label`),
  }));

  return (
    <>
      <PageHero
        imageSrc="/clinic/clinic-0128.jpg"
        imageAlt="Klinika Maxillodent - Sallë Pritje"
        badge={t("badge")}
        title={t("title")}
        subtitle={t("subtitle")}
        variant={1}
      />

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("storyTitle")}</h2>
              <p className="text-gray-600 leading-relaxed">{t("story")}</p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/clinic/clinic-0119.jpg"
                alt="Kabineti dentar Maxillodent"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-12 bg-[#f0fdfa] rounded-2xl p-8 border border-[#0284c7]/20">
            <h3 className="text-xl font-bold text-[#0284c7] mb-3">{t("missionTitle")}</h3>
            <p className="text-gray-700 leading-relaxed">{t("mission")}</p>
          </div>
        </div>
      </section>

      {/* Clinic Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t("galleryTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["/clinic/clinic-0120.jpg", "/clinic/clinic-0122.jpg", "/clinic/clinic-0128.jpg"].map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                <Image src={src} alt={`Klinika Maxillodent ${i + 1}`} width={600} height={450} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0c4a6e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-extrabold text-[#7dd3fc] mb-1">{stat.value}</div>
                <div className="text-[#bae6fd] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
