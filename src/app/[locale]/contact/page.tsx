import { setRequestLocale } from "next-intl/server";
import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Kontakt",
    description: "Na kontaktoni për të caktuar konsultimin tuaj falas.",
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHero
        imageSrc="/clinic/clinic-0122.jpg"
        imageAlt="Klinika Maxillodent - Kabinet dentar"
        badge="📞 Na Kontaktoni"
        title="Caktoni Takimin Tuaj"
        subtitle="Ekipi ynë është i gatshëm t'ju ofrojë konsultimin falas dhe planin e trajtimit."
        variant={3}
      />
      <ContactForm />
    </>
  );
}
