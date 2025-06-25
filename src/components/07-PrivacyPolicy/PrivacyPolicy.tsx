import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-20 px-4 py-10 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">App Name: Reachon</p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Reachon ("we", "our", or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use our app. By using Reachon,
            you agree to the collection and use of information in accordance
            with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            2. Information We Collect
          </h2>
          <p>
            We collect only the minimum information necessary to provide and
            improve the Reachon experience, including:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>
              <strong>User Profile Information:</strong> Name, phone number, and
              email address.
            </li>
            <li>
              <strong>Parcel Data:</strong> CN numbers, destinations, number of
              pieces, pincode, booking date/time, contents, and status.
            </li>
            <li>
              <strong>Usage Data:</strong> Non-personal app usage statistics.
            </li>
          </ul>
          <p className="mt-2">
            We <strong>do not collect</strong> sensitive data like government
            ID, financial data, or location without permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            3. How We Use Your Information
          </h2>
          <p>We use your information solely to:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Provide accurate parcel tracking and booking insights.</li>
            <li>Personalize dashboard and profile experience.</li>
            <li>Improve app functionality and features.</li>
          </ul>
          <p className="mt-2">
            We do not sell or share your data with third parties except when
            required for service functionality or by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>
            We implement strong security measures to protect your data from
            unauthorized access, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            5. Third-Party Services
          </h2>
          <p>
            We may use trusted third-party services (e.g., Firebase) for data
            storage and analytics. These may collect anonymous usage data. Refer
            to their privacy policies for more details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>
            You can access, modify, or request deletion of your data by
            contacting our support. Uninstalling the app does not automatically
            delete your data unless requested.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this policy periodically. We will notify you through
            the app or website. Continued use indicates acceptance of the
            updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p>If you have any questions, feel free to contact us:</p>
          <ul className="list-none ml-2 mt-2 space-y-1">
            <li>
              <strong>Email:</strong> reachonexpress@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 94438 94875
            </li>
            <li>
              <strong>Address:</strong> No 118 Gandhiji Road, Erode HO, Erode -
              638001 (Near Railway Station)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
