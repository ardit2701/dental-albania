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
  const tHero = await getTranslations({ locale, namespace: "hero" });
  const tLayout = await getTranslations({ locale, namespace: "layout" });

  const baseUrl = "https://www.maxillodent.al";

  return {
    title: {
      default: `Maxillodent - ${tLayout("siteTagline")}`,
      template: "%s | Maxillodent",
    },
    description: tHero("subtitle"),
    keywords: [
      "Maxillodent",
      "Maxillodent Albania",
      "dental clinic Albania",
      "implante dentare",
      "faseta dentare",
      "dental tourism Albania",
      "klinika dentare Tiranë",
    ],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        "sq": `${baseUrl}/sq`,
        "en": `${baseUrl}/en`,
        "it": `${baseUrl}/it`,
      },
    },
    openGraph: {
      siteName: "Maxillodent",
      locale: locale,
      url: `${baseUrl}/${locale}`,
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
  const tLayout = await getTranslations({ locale, namespace: "layout" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Maxillodent Dental and Maxillofacial Clinic",
    alternateName: "Maxillodent",
    url: "https://www.maxillodent.al",
    logo: "https://www.maxillodent.al/logo-icon.png",
    image: "https://www.maxillodent.al/logo-icon.png",
    description: tLayout("siteDescription"),
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
