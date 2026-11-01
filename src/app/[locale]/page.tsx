import { setRequestLocale } from "next-intl/server";
import { Suspense } from "react";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import BeforeAfter from "@/components/home/BeforeAfter";
import TreatmentProcess from "@/components/home/TreatmentProcess";
import WhyUs from "@/components/home/WhyUs";
import Doctors from "@/components/home/Doctors";
import Reviews from "@/components/home/Reviews";
import ContactForm from "@/components/contact/ContactForm";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero locale={locale} />
      <Services locale={locale} />
      <Suspense fallback={<div className="py-16 bg-white" />}>
        <BeforeAfter />
      </Suspense>
      <WhyUs locale={locale} />
      <Suspense fallback={<div className="py-16 bg-gray-50" />}>
        <TreatmentProcess />
      </Suspense>
      <Doctors locale={locale} />
      <Suspense fallback={<div className="py-16 bg-gray-50" />}>
        <Reviews />
      </Suspense>
      <Suspense fallback={<div className="py-16 bg-white" />}>
        <ContactForm />
      </Suspense>
    </>
  );
}
