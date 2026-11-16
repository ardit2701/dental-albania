'use client';

import { useEffect, useState } from 'react';
import { hasAnsweredConsent, setAdConsent } from '@/lib/consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasAnsweredConsent()) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    setAdConsent(true);
    setVisible(false);
  };

  const reject = () => {
    setAdConsent(false);
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-sm text-gray-600 max-w-2xl">
          We use advertising cookies to understand how our marketing performs and show you relevant content.
          By clicking <strong>Accept</strong>, you consent to the use of these cookies in accordance with{' '}
          UK privacy law (UK GDPR &amp; PECR). You can change your preference at any time.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            Reject
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-xl transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
