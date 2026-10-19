"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";

const COUNTRIES = [
  "Albania", "Austria", "Belgium", "Bosnia", "Bulgaria", "Croatia", "Czech Republic",
  "Denmark", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy",
  "Kosovo", "Luxembourg", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal",
  "Romania", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
  "United Kingdom", "United States", "Canada", "Australia", "Other"
];

const schema = z.object({
  firstName: z.string().min(2, "Emri duhet të ketë të paktën 2 karaktere"),
  lastName: z.string().min(2, "Mbiemri duhet të ketë të paktën 2 karaktere"),
  email: z.string().email("Email adresa nuk është e vlefshme"),
  phone: z.string().optional(),
  country: z.string().min(1, "Ju lutem zgjidhni shtetin"),
  treatment: z.string().min(1, "Ju lutem zgjidhni trajtimin"),
  message: z.string().optional(),
  privacy: z.boolean().refine((v) => v === true, "Duhet të pranoni Politikën e Privatësisë"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    // Simulate EmailJS send (replace with actual EmailJS credentials)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form data:", data);
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0284c7] focus:border-transparent transition-all text-sm";
  const errorClass = "text-red-500 text-xs mt-1";

  const treatmentOptions = [
    t("fields.treatmentOptions.0"),
    t("fields.treatmentOptions.1"),
    t("fields.treatmentOptions.2"),
    t("fields.treatmentOptions.3"),
    t("fields.treatmentOptions.4"),
    t("fields.treatmentOptions.5"),
    t("fields.treatmentOptions.6"),
    t("fields.treatmentOptions.7"),
    t("fields.treatmentOptions.8"),
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0284c7]/10 text-[#0284c7] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Kontakti
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form - first on mobile */}
          <div className="order-1 lg:order-2">
            <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t("formTitle")}</h3>

              {status === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-800 text-sm font-medium">{t("successMsg")}</p>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-sm">{t("errorMsg")}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("fields.firstName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("firstName")}
                      placeholder={t("fields.firstName")}
                      className={inputClass}
                    />
                    {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("fields.lastName")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("lastName")}
                      placeholder={t("fields.lastName")}
                      className={inputClass}
                    />
                    {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("fields.email")} <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="email@example.com"
                    className={inputClass}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("fields.phone")}
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="+355..."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t("fields.country")} <span className="text-red-500">*</span>
                    </label>
                    <select {...register("country")} className={inputClass}>
                      <option value="">{t("fields.selectCountry")}</option>
                      {COUNTRIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.country && <p className={errorClass}>{errors.country.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("fields.treatment")} <span className="text-red-500">*</span>
                  </label>
                  <select {...register("treatment")} className={inputClass}>
                    <option value="">{t("fields.selectTreatment")}</option>
                    {treatmentOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.treatment && <p className={errorClass}>{errors.treatment.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("fields.message")}
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Shkruani mesazhin tuaj..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      {...register("privacy")}
                      type="checkbox"
                      className="mt-0.5 w-4 h-4 accent-[#0284c7] shrink-0"
                    />
                    <span className="text-sm text-gray-600">
                      {t("fields.privacy")}{" "}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.privacy && <p className={errorClass}>{errors.privacy.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-[#0284c7] hover:bg-[#0369a1] disabled:opacity-70 text-white font-bold text-base rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      {t("submitting")}
                    </>
                  ) : (
                    t("submit")
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Info + Map */}
          <div className="order-2 lg:order-1 space-y-6">
            {/* Contact info */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-5">Informacion Kontakti</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Adresa",
                    value: t("address"),
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Telefon",
                    value: t("phone"),
                    href: "tel:+35569500000",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    value: t("email"),
                    href: "mailto:info@kokonadental.al",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-[#0284c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Orari",
                    value: t("hours"),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#0284c7]/10 rounded-xl flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-gray-800 hover:text-[#0284c7] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-gray-800">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-64 lg:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1234567890!2d19.8187!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzM5LjAiTiAxOcKwNDknMDcuMiJF!5e0!3m2!1sen!2sal!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KOKONA Dental and Maxillofacial Clinic Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
