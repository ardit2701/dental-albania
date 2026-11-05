import { setRequestLocale, getTranslations } from "next-intl/server";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDesc"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero
        imageSrc="/clinic/clinic-0122.jpg"
        imageAlt="Maxillodent - Kabinet dentar"
        badge={t("heroBadge")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
        variant={3}
      />
      <ContactForm />
    </>
  );
}
