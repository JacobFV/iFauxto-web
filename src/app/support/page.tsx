import Link from "next/link";

export const metadata = {
  title: "Support - iFauxto",
  description: "Get help with iFauxto photo organization app",
};

export default function SupportPage() {
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

        <h1 className="text-4xl font-bold mb-8">Support</h1>
        <p className="text-xl text-gray-400 mb-12">
          We&apos;re here to help you get the most out of iFauxto.
        </p>

        <div className="space-y-12">
          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Does iFauxto upload my photos anywhere?</h3>
                <p className="text-gray-400">
                  No. Your photos stay on your device and in your iCloud Photo Library.
                  We never upload, copy, or transmit your photos to our servers.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Will organizing photos in iFauxto affect my Apple Photos?</h3>
                <p className="text-gray-400">
                  No. iFauxto creates a separate organizational layer on top of your
                  existing photo library. Your Apple Photos albums and organization remain untouched.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2">How does iCloud sync work?</h3>
                <p className="text-gray-400">
                  Your folder structure syncs automatically via your iCloud account.
                  Create a folder on iPhone, and it appears on your iPad.
                  Photos themselves sync through Apple&apos;s iCloud Photo Library as usual.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2">Can I create folders within folders?</h3>
                <p className="text-gray-400">
                  Yes! iFauxto supports nested folders. Drag a photo onto another photo
                  to create a subfolder, or use the folder creation tools.
                </p>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2">What happens if I delete a photo from Apple Photos?</h3>
                <p className="text-gray-400">
                  If you delete a photo from Apple Photos, it will no longer appear in
                  your iFauxto folders. We reference your existing library—we don&apos;t
                  store copies.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Still Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:support@ifauxto.com"
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                <p className="text-gray-400 text-sm">support@ifauxto.com</p>
                <p className="text-gray-500 text-sm mt-1">We typically respond within 24 hours</p>
              </a>

              <a
                href="https://twitter.com/ifauxto"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Twitter / X</h3>
                <p className="text-gray-400 text-sm">@ifauxto</p>
                <p className="text-gray-500 text-sm mt-1">For quick questions and updates</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
