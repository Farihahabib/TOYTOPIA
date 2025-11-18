import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-10">
        Terms & Conditions – ToyTopia
      </h1>

      <p className="text-gray-700 mb-6">
        Welcome to <strong>ToyTopia</strong>. By accessing or using our website,
        you agree to follow the Terms & Conditions below. Please read them
        carefully before using our services.
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        1. Acceptance of Terms
      </h2>
      <p className="text-gray-700 mb-6">
        By using our website, products, or services, you acknowledge that you
        have read, understood, and agreed to these Terms & Conditions. If you do
        not agree, please discontinue using ToyTopia.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        2. Use of Our Website
      </h2>
      <p className="text-gray-700 mb-6">
        You may browse, purchase toys, and access information on our website
        only for lawful purposes. You agree not to misuse the website or engage
        in any unauthorized activity that could harm our platform or other
        users.
      </p>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        3. Product Information
      </h2>
      <p className="text-gray-700 mb-6">
        We strive to ensure that all toy details, prices, and availability are
        accurate. However, errors may occur, and we reserve the right to update,
        correct, or modify product information without prior notice.
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        4. Orders & Payments
      </h2>
      <p className="text-gray-700 mb-6">
        All orders placed with ToyTopia must be paid in full before shipment.
        We hold the right to cancel any order in case of pricing errors, stock
        issues, or suspected fraudulent activity.
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        5. Returns & Refunds
      </h2>
      <p className="text-gray-700 mb-6">
        Customers may request returns or refunds within 7 days of purchase,
        provided the toy is unused, undamaged, and in original packaging.
        Digital items are non-refundable.
      </p>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        6. Privacy Policy
      </h2>
      <p className="text-gray-700 mb-6">
        We respect your privacy and protect your personal information following
        our Privacy Policy. By using our services, you consent to our data
        practices.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        7. Limitation of Liability
      </h2>
      <p className="text-gray-700 mb-6">
        ToyTopia will not be held responsible for any damages, losses, or
        injuries arising from improper toy use, website downtime, or purchase
        issues beyond our control.
      </p>

      {/* Section 8 */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        8. Changes to Terms
      </h2>
      <p className="text-gray-700 mb-6">
        We may update these Terms & Conditions at any time. Continued use of our
        website means you accept any changes made.
      </p>

      {/* Footer */}
      <p className="text-gray-700 mt-10">
        If you have any questions about these Terms & Conditions, please contact
        us at: support@toytopia.com
      </p>
    </div>
  );
};

export default Terms;
