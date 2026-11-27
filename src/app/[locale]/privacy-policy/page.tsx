import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Privacy Policy | Maxillodent",
    description: "Privacy Policy for Maxillodent Dental and Maxillofacial Clinic. Learn how we collect, use, and protect your personal data in accordance with UK GDPR.",
    alternates: {
      canonical: `https://www.maxillodent.al/${locale}/privacy-policy`,
      languages: {
        sq: `https://www.maxillodent.al/sq/privacy-policy`,
        en: `https://www.maxillodent.al/en/privacy-policy`,
        it: `https://www.maxillodent.al/it/privacy-policy`,
      },
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <div className="bg-[#0c4a6e] pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sky-300 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Legal Document</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Privacy Policy</h1>
          <p className="text-sky-200 text-sm">
            Effective date: 27 November 2026 &nbsp;·&nbsp; Version 1.0
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro box */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mb-12">
          <p className="text-gray-700 text-sm leading-relaxed">
            This Privacy Policy explains how <strong>Maxillodent Dental and Maxillofacial Clinic</strong> collects, uses, stores, and protects your personal information when you visit our website or enquire about our dental services. We are committed to protecting your privacy and handling your data responsibly in accordance with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed mt-3">
            Please read this policy carefully. By using our website or submitting an enquiry, you acknowledge that you have read and understood this policy.
          </p>
        </div>

        <div className="space-y-12 text-gray-700">

          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">1</span>
              <h2 className="text-xl font-bold text-gray-900">Data Controller</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>The data controller responsible for your personal information is:</p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-1">
                <p><strong>Maxillodent Dental and Maxillofacial Clinic</strong></p>
                <p>Rruga e Barrikadave, Tirana, Albania</p>
                <p>Phone / WhatsApp: <strong>+44 7700 199000</strong></p>
                <p>Email: <strong>info@maxillodent.al</strong></p>
                <p>Website: <strong>www.maxillodent.al</strong></p>
              </div>
              <p>
                If you have any questions about this policy or how we handle your data, please contact us using the details above.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">2</span>
              <h2 className="text-xl font-bold text-gray-900">What Personal Data We Collect</h2>
            </div>
            <div className="pl-11 space-y-4 text-sm leading-relaxed">
              <p>We collect the following categories of personal data:</p>

              <div>
                <p className="font-semibold text-gray-900 mb-2">a) Identity and Contact Data</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Country of residence</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">b) Health and Clinical Data (Special Category)</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Details of your dental condition or treatment interest as shared voluntarily in your enquiry</li>
                  <li>Medical history relevant to dental treatment (provided during consultation)</li>
                </ul>
                <p className="mt-2 text-[#0284c7] font-medium">We only collect health data that you voluntarily provide to us. This data is treated with the highest level of protection under UK GDPR Article 9.</p>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">c) Technical and Usage Data</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>IP address and browser type</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral source (how you found us)</li>
                  <li>Cookie identifiers (where consent is given)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">3</span>
              <h2 className="text-xl font-bold text-gray-900">How We Use Your Data</h2>
            </div>
            <div className="pl-11 text-sm leading-relaxed">
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Purpose</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Responding to your enquiry", "Legitimate interests / Contract"],
                      ["Booking and managing appointments", "Contract"],
                      ["Providing dental treatment information and quotes", "Legitimate interests"],
                      ["Sending appointment confirmations and reminders", "Contract / Consent"],
                      ["Processing contact form submissions", "Consent"],
                      ["Improving our website and services", "Legitimate interests"],
                      ["Complying with legal or regulatory obligations", "Legal obligation"],
                      ["Advertising and remarketing (Meta Pixel)", "Consent"],
                    ].map(([purpose, basis], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-4 py-3 text-gray-700">{purpose}</td>
                        <td className="px-4 py-3 text-[#0284c7] font-medium">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">4</span>
              <h2 className="text-xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>Our website uses cookies and similar technologies. We distinguish between:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 mb-1">Essential Cookies</p>
                  <p className="text-gray-600 text-xs">Required for the website to function. No consent is needed. These cannot be disabled.</p>
                </div>
                <div className="bg-sky-50 border border-sky-200 rounded-xl p-4">
                  <p className="font-semibold text-gray-900 mb-1">Optional Cookies (Advertising)</p>
                  <p className="text-gray-600 text-xs">Used for marketing purposes (e.g. Meta Pixel). We ask for your consent before placing these cookies via our cookie banner.</p>
                </div>
              </div>
              <p>You may withdraw your consent to optional cookies at any time by clearing your browser cookies or contacting us. This will not affect the lawfulness of processing before withdrawal.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">5</span>
              <h2 className="text-xl font-bold text-gray-900">Sharing Your Personal Data</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>We do not sell, rent, or trade your personal data. We may share it only in the following limited circumstances:</p>
              <ul className="space-y-3">
                {[
                  { party: "Meta Platforms (Facebook/Instagram)", detail: "Anonymised event data shared via Meta Pixel only where you have consented to advertising cookies." },
                  { party: "Website and email hosting providers", detail: "Processors acting on our behalf under data processing agreements, bound by confidentiality." },
                  { party: "Professional advisors", detail: "Legal, financial, or medical advisors where necessary, subject to professional confidentiality obligations." },
                  { party: "Law enforcement or regulatory bodies", detail: "Where we are required to do so by applicable law or court order." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <svg className="w-4 h-4 text-[#0284c7] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{item.party}</p>
                      <p className="text-gray-600 mt-0.5">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">6</span>
              <h2 className="text-xl font-bold text-gray-900">International Data Transfers</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>
                Maxillodent is based in <strong>Albania</strong>. The Republic of Albania has been granted an <strong>adequacy decision</strong> by the European Commission, and is recognised as providing an equivalent level of data protection to that required under UK GDPR for transfers from the UK.
              </p>
              <p>
                Where data is transferred to other third countries (e.g. via Meta Platforms), appropriate safeguards such as Standard Contractual Clauses (SCCs) are in place.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">7</span>
              <h2 className="text-xl font-bold text-gray-900">Data Retention</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>We retain your personal data only for as long as necessary for the purposes set out in this policy, unless a longer retention period is required by law.</p>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Data Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b border-gray-200">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["Enquiry and contact form data", "2 years from last contact"],
                      ["Clinical / treatment records", "10 years (UK dental standards)"],
                      ["Cookie and analytics data", "Up to 13 months"],
                      ["Marketing consent records", "Until consent is withdrawn + 1 year"],
                    ].map(([type, period], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                        <td className="px-4 py-3 text-gray-700">{type}</td>
                        <td className="px-4 py-3 text-gray-600">{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">8</span>
              <h2 className="text-xl font-bold text-gray-900">Your Rights Under UK GDPR</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>You have the following rights in relation to your personal data:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { right: "Right of Access", desc: "Request a copy of the personal data we hold about you (Subject Access Request)." },
                  { right: "Right to Rectification", desc: "Ask us to correct any inaccurate or incomplete data we hold." },
                  { right: "Right to Erasure", desc: "Request deletion of your personal data where there is no lawful reason to retain it." },
                  { right: "Right to Restriction", desc: "Ask us to limit the processing of your data in certain circumstances." },
                  { right: "Right to Data Portability", desc: "Receive your data in a structured, machine-readable format." },
                  { right: "Right to Object", desc: "Object to processing based on legitimate interests or for direct marketing." },
                  { right: "Right to Withdraw Consent", desc: "Withdraw consent at any time where processing is consent-based, without affecting prior processing." },
                  { right: "Right not to be subject to automated decisions", desc: "We do not make solely automated decisions that significantly affect you." },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <p className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">{item.right}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-[#0284c7]/5 border border-[#0284c7]/20 rounded-xl p-4 mt-4">
                <p className="font-semibold text-[#0284c7] mb-1">How to exercise your rights</p>
                <p>Contact us at <strong>info@maxillodent.al</strong> or <strong>+44 7700 199000</strong>. We will respond within <strong>one calendar month</strong> of receiving your request.</p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">9</span>
              <h2 className="text-xl font-bold text-gray-900">Data Security</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include encrypted data transmission (HTTPS), access controls, and secure data storage practices.
              </p>
              <p>
                While we take all reasonable steps to protect your data, no method of transmission over the internet is 100% secure. If you have reason to believe that your data has been compromised, please contact us immediately.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">10</span>
              <h2 className="text-xl font-bold text-gray-900">How to Complain</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>
                If you are unhappy with how we have handled your personal data, please contact us first so we can try to resolve the matter.
              </p>
              <p>
                If you remain unsatisfied, and you are based in the United Kingdom, you have the right to lodge a complaint with the <strong>Information Commissioner&rsquo;s Office (ICO)</strong>, the UK supervisory authority for data protection:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-1">
                <p><strong>Information Commissioner&rsquo;s Office (ICO)</strong></p>
                <p>Website: <strong>ico.org.uk</strong></p>
                <p>Helpline: <strong>0303 123 1113</strong></p>
                <p>Live chat available on the ICO website</p>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0284c7] text-white text-sm font-bold flex items-center justify-center">11</span>
              <h2 className="text-xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
            </div>
            <div className="pl-11 space-y-3 text-sm leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. Any material changes will be posted on this page with an updated effective date.
              </p>
              <p>
                We encourage you to review this policy periodically. Continued use of our website after any changes constitutes your acceptance of the updated policy.
              </p>
            </div>
          </section>

        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            &copy; 2026 Maxillodent Dental and Maxillofacial Clinic. This Privacy Policy is governed by UK GDPR and the Data Protection Act 2018.
          </p>
        </div>

      </div>
    </div>
  );
}
