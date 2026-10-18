import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Mjekët Tanë",
    description: "Njihuni me ekipin mjekësor të KOKONA Dental and Maxillofacial Clinic — specialistë të certifikuar ndërkombëtarisht.",
  };
}

const doctors: { name: string; title: string; specialty: string; photo: string | null; bio: string; education: { label: string; value: string }[]; expertise: string[]; accent: string; tagClass: string; experience: string }[] = [
  {
    name: "Dr. Arlind Myftari",
    title: "DMD, MD",
    specialty: "Kirurgji Maxillo-Faciale & Implantologji",
    photo: "/doctors/arlind-myftari.png",
    bio: "Dr. Arlind Myftari është specialist i Kirurgjisë Maxillo-Faciale me mbi 15 vjet eksperiencë klinike. Pas diplomimit në Universitetin e Tiranës (2007), ai kreu një specializim 4-vjeçar të plotë në Kirurgji Maxillo-Faciale, duke u bërë një nga mjekët më të kualifikuar në fushën e implantologjisë dhe kirurgjisë orale në Shqipëri. Gjatë karrierës së tij, Dr. Myftari ka ndjekur kurse të avancuara në Londër dhe Vjenë, duke qëndruar i përditësuar me teknikat më të reja kirurgjikale.",
    education: [
      { label: "DMD & MD", value: "Universiteti i Tiranës, 2007" },
      { label: "Specializim 4-vjeçar", value: "Kirurgji Maxillo-Faciale" },
      { label: "Trajnime ndërkombëtare", value: "Londër, Angli & Vjenë, Austri" },
      { label: "Anëtarësi profesionale", value: "EACMFS — European Association of Cranio Maxillo Facial Surgery (që nga 2012)" },
      { label: "Pozicion", value: "Kirurg në QSUT 'Nënë Tereza', Tiranë" },
    ],
    expertise: [
      "Implante dentare & overdentures",
      "Kirurgji orale dhe maksilofaciale",
      "Augmentim i kockës (bone grafting)",
      "Trajtim i traumave faciale",
      "Kirurgji estetike faciale",
      "Onkologji kokë & qafë",
      "Ekstraksione kirurgjikale",
      "Ngritje sinusi (Sinus Lifting)",
    ],
    accent: "#003087",
    tagClass: "bg-blue-50 text-blue-700 border-blue-100",
    experience: "15+ vjet",
  },
  {
    name: "Dr. Odeta Shehu",
    title: "DMD",
    specialty: "Ortodonti & Estetikë Dentare",
    photo: null,
    bio: "Dr. Odeta Shehu është specialiste e Ortodontisë me formim ndërkombëtar të lartë. Pas diplomimit në Universitetin e Tiranës (2009), ajo vazhdoi studimet e specializimit CES (Certificat d'Études Spécialisées) në Ortodonti dhe Ortopedi Dentofaciale pranë Université Bordeaux 2 në Francë (2011), ku njëkohësisht punoi si asistente ortodontike në një klinikë private. Eksperienca e saj ndërkombëtare vazhdoi edhe në Mbretërinë e Bashkuar, duke e bërë atë një nga ortodontistet më të kualifikuara në vend.",
    education: [
      { label: "DMD", value: "Universiteti i Tiranës, 2009" },
      { label: "CES Ortodonti", value: "Université Bordeaux 2, Francë, 2011" },
      { label: "Eksperiencë klinike", value: "Klinikë private ortodontike, Bordeaux, Francë" },
      { label: "Ndërkombëtare", value: "Facial Clinic, Leicester, Mbretëria e Bashkuar" },
    ],
    expertise: [
      "Aligners transparentë (Invisalign-type)",
      "Aparate self-ligating metalike & ceramike",
      "Trajtim ortodontik fëmijë & të rritur",
      "Ortopedi dento-faciale",
      "Trajtim TMJ (çrregullime të nofullës)",
      "Faseta & estetikë dentare",
      "Trajtim endodontik (kanale rrënjore)",
      "Dentistri konservative",
    ],
    accent: "#0d9488",
    tagClass: "bg-teal-50 text-teal-700 border-teal-100",
    experience: "12+ vjet",
  },
];

export default async function DoctorsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PageHero
        imageSrc="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Ekipi mjekësor KOKONA Dental"
        badge="👨‍⚕️ Ekipi Mjekësor"
        title="Mjekët Tanë Specialistë"
        subtitle="Specialistë të certifikuar ndërkombëtarisht, të përkushtuar ndaj cilësisë dhe kujdesit për çdo pacient."
        variant={2}
        cta={{ label: "Cakto Konsultim", href: "#contact" }}
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-12">
            {doctors.map((doctor, i) => (
              <div
                key={doctor.name}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                {/* Photo */}
                <div className="relative w-full lg:w-80 h-96 lg:h-auto shrink-0 bg-gradient-to-br from-teal-800 to-teal-900">
                  {doctor.photo && (
                    <>
                      <Image
                        src={doctor.photo}
                        alt={doctor.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                      {/* Name overlay on mobile */}
                      <div className="absolute bottom-4 left-4 lg:hidden">
                        <p className="text-white font-bold text-xl drop-shadow">{doctor.name}</p>
                        <p className="text-white/80 text-sm">{doctor.title}</p>
                      </div>
                    </>
                  )}
                  {/* Experience badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold text-teal-700 px-3 py-1.5 rounded-full shadow">
                    {doctor.experience}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-7 lg:p-10">
                  {/* Name — desktop only */}
                  <div className="hidden lg:block mb-4">
                    <h2 className="text-2xl font-extrabold text-gray-900">{doctor.name}</h2>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-gray-400 text-sm font-medium">{doctor.title}</span>
                      <span className="text-gray-300">·</span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${doctor.tagClass}`}>
                        {doctor.specialty}
                      </span>
                    </div>
                  </div>

                  {/* Specialty tag — mobile only */}
                  <div className="lg:hidden mb-3">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${doctor.tagClass}`}>
                      {doctor.specialty}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-7">{doctor.bio}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    {/* Education */}
                    <div>
                      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Edukimi & Trajnimi
                      </h3>
                      <ul className="space-y-3">
                        {doctor.education.map((e) => (
                          <li key={e.label} className="flex gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: doctor.accent }} />
                            <div>
                              <p className="text-xs font-semibold text-gray-800">{e.label}</p>
                              <p className="text-xs text-gray-500 leading-relaxed">{e.value}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expertise */}
                    <div>
                      <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                        Fushat e Ekspertizës
                      </h3>
                      <ul className="space-y-2">
                        {doctor.expertise.map((e) => (
                          <li key={e} className="flex items-center gap-2 text-xs text-gray-600">
                            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: doctor.accent }}>
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
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                      style={{ backgroundColor: doctor.accent }}
                    >
                      Cakto Konsultim
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
