import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/routing";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    title: {
      default: "Maxillodent Dental and Maxillofacial Clinic - Klinika Dentare Nr.1 në Shqipëri",
      template: "%s | Maxillodent Dental and Maxillofacial Clinic",
    },
    description: t("subtitle"),
    keywords: [
      "Maxillodent",
      "Maxillodent klinik",
      "Maxillodent Albania",
      "dental clinic Albania",
      "implante dentare",
      "faseta dentare",
      "dental tourism Albania",
      "klinika dentare Tiranë",
      "klinika maxillodent",
    ],
    openGraph: {
      siteName: "Maxillodent Dental and Maxillofacial Clinic",
      locale: locale,
    },
    icons: {
      icon: "/logo-icon.png",
      apple: "/logo-icon.png",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "sq" | "en" | "it")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Maxillodent Dental and Maxillofacial Clinic",
    alternateName: "Maxillodent",
    url: "https://www.maxillodent.al",
    logo: "https://www.maxillodent.al/logo-icon.png",
    image: "https://www.maxillodent.al/logo-icon.png",
    description: "Klinika Dentare dhe Maxillofaciale Nr.1 në Shqipëri. Implante dentare, faseta, ortodonci dhe turizëm dentar.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tiranë",
      addressCountry: "AL",
    },
    telephone: "+355",
    priceRange: "$$",
    medicalSpecialty: "Dentistry",
    sameAs: ["https://www.maxillodent.al"],
  };

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
