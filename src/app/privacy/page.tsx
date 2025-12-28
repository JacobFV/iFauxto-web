import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - iFauxto",
  description: "Privacy policy for iFauxto photo organization app",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: December 2024</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
            <p>
              iFauxto is designed with your privacy as a priority. We believe your photos
              are your business, and we&apos;ve built our app to reflect that.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What We Access</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Photo Library:</strong> We request access to your
                photo library to display and organize your photos. We do not upload, copy, or
                transmit your photos anywhere.
              </li>
              <li>
                <strong className="text-white">iCloud:</strong> Your folder organization syncs
                via your personal iCloud account. We don&apos;t have access to this data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What We Don&apos;t Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>We don&apos;t collect your photos</li>
              <li>We don&apos;t sell your data</li>
              <li>We don&apos;t track your behavior</li>
              <li>We don&apos;t use analytics that identify you</li>
              <li>We don&apos;t show ads</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Storage</h2>
            <p>
              All data created by iFauxto (folder structures, preferences) is stored locally
              on your device and synced via your personal iCloud account. We have no servers
              that store your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              Questions about privacy? Email us at{" "}
              <a href="mailto:privacy@ifauxto.com" className="text-purple-400 hover:underline">
                privacy@ifauxto.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
