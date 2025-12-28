import Link from "next/link";

export const metadata = {
  title: "Terms of Service - iFauxto",
  description: "Terms of service for iFauxto photo organization app",
};

export default function TermsPage() {
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

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: December 2024</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p>
              By downloading or using iFauxto, you agree to these terms. If you don&apos;t
              agree, please don&apos;t use the app. Simple as that.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What You Can Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Use iFauxto to organize your personal photos</li>
              <li>Create as many folders as you want</li>
              <li>Arrange your photos however you like</li>
              <li>Sync across your devices via iCloud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">What You Can&apos;t Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Reverse engineer, decompile, or disassemble the app</li>
              <li>Use the app for any illegal purpose</li>
              <li>Redistribute or resell the app</li>
              <li>Remove any proprietary notices from the app</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Content</h2>
            <p>
              Your photos remain yours. We don&apos;t claim any ownership or rights to your
              content. The folder structures you create are yours too.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <p>
              iFauxto is provided &quot;as is&quot; without warranties of any kind. We do our best
              to make a reliable app, but we can&apos;t guarantee it will always work perfectly.
              Always keep backups of your important photos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
            <p>
              We may update these terms occasionally. We&apos;ll notify you of significant
              changes through the app or our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a href="mailto:legal@ifauxto.com" className="text-purple-400 hover:underline">
                legal@ifauxto.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
