import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-10">
        Privacy Policy – ToyTopia
      </h1>

      <p className="text-gray-700 mb-6">
        At <strong>ToyTopia</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your personal
        information when you visit our website or purchase our products.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        1. Information We Collect
      </h2>
      <p className="text-gray-700 mb-6">
        We may collect personal details such as your name, email address, phone
        number, shipping address, and payment information. We also collect
        non-personal data like browser type, device information, and cookies to
        improve website performance.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        2. How We Use Your Information
      </h2>
      <p className="text-gray-700 mb-6">
        Your information is used to:  
        • Process orders and payments  
        • Improve customer service  
        • Provide updates about orders  
        • Send promotional offers (only with consent)  
        • Enhance website experience  
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        3. Cookies & Tracking
      </h2>
      <p className="text-gray-700 mb-6">
        We use cookies to analyze website traffic, store cart items, and enhance
        user experience. You may disable cookies through your browser settings,
        but some features may not work properly.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        4. Sharing of Information
      </h2>
      <p className="text-gray-700 mb-6">
        ToyTopia does not sell, trade, or rent your personal information.  
        We may share data only with trusted service providers such as payment
        processors and delivery partners, strictly for order fulfillment.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        5. Data Protection
      </h2>
      <p className="text-gray-700 mb-6">
        We use secure technologies to protect your data from unauthorized
        access, theft, or misuse. However, no online platform can guarantee
        100% security.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        6. Children's Privacy
      </h2>
      <p className="text-gray-700 mb-6">
        ToyTopia does not knowingly collect data from children under 13.
        Parents or guardians who believe we have collected such information may
        contact us for immediate removal.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        7. Your Rights
      </h2>
      <p className="text-gray-700 mb-6">
        You may request access, correction, or deletion of your personal data at
        any time by contacting our support team.
      </p>

      {/* Section 8 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        8. Changes to This Policy
      </h2>
      <p className="text-gray-700 mb-6">
        We may update this Privacy Policy from time to time. Continued use of
        our website means you accept the updated terms.
      </p>

      <p className="text-gray-700 mt-10">
        If you have any questions about our Privacy Policy, contact us at:  
        <strong>support@toytopia.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
