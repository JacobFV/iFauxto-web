import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">
            iFauxto
          </div>
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#why" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Why iFauxto
            </Link>
            <Link
              href="#download"
              className="text-sm bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-black to-black" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-6">
            Photo Organization, Reimagined
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold mb-8 leading-[1.1] tracking-tight">
            Your photos.
            <br />
            Your order.
          </h1>

          <p className="text-lg text-neutral-400 mb-12 max-w-xl mx-auto leading-relaxed">
            A photo organizer that respects your decisions. Drag, drop, and arrange your memories exactly how you want.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-all"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
          </div>
        </div>

        {/* Phone mockups */}
        <div className="relative mt-24 flex items-end justify-center gap-4 md:gap-8">
          {/* Left phone */}
          <div className="hidden md:block relative -rotate-6">
            <div className="w-[200px] aspect-[9/19.5] bg-neutral-900 rounded-[2rem] border border-neutral-800 shadow-2xl overflow-hidden">
              <img
                src="/screenshot-2.png"
                alt="iFauxto app screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Center phone */}
          <div className="relative z-10">
            <div className="w-[260px] md:w-[280px] aspect-[9/19.5] bg-neutral-900 rounded-[2.5rem] border border-neutral-800 shadow-2xl overflow-hidden">
              <img
                src="/app.png"
                alt="iFauxto main interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right phone */}
          <div className="hidden md:block relative rotate-6">
            <div className="w-[200px] aspect-[9/19.5] bg-neutral-900 rounded-[2rem] border border-neutral-800 shadow-2xl overflow-hidden">
              <img
                src="/screenshot-1.png"
                alt="iFauxto app screenshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4">
              Features
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Tools that matter
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 rounded-2xl overflow-hidden">
            {/* Feature 1 */}
            <div className="bg-black p-10">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">Custom Folders</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Create folders that make sense to you. No auto-generated albums you never asked for.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black p-10">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">Drag to Reorder</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Your favorite photo should be first. Drag it there. It stays there.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black p-10">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">Nested Folders</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Folders within folders. Because &quot;Vacation&quot; needs &quot;Day 1&quot; and &quot;Day 2.&quot;
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-black p-10">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">Fluid Interface</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Folders open with elegant animations. Photos flow into place naturally.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-black p-10">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">iCloud Sync</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Your organization syncs across all devices. Create on iPad, see on iPhone.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-black p-10">
              <div className="w-10 h-10 bg-neutral-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-3">No Algorithm</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                We don&apos;t decide what&apos;s relevant. You&apos;re in charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-32 px-6 border-t border-neutral-900">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-neutral-500 uppercase tracking-widest mb-4 text-center">
            Why iFauxto
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-center mb-16">
            Built for people who care
          </h2>

          <div className="space-y-8 text-neutral-400 leading-relaxed">
            <p>
              We love our iPhones. But every time we open Photos, we&apos;re reminded that Apple thinks they know better.
            </p>
            <p>
              Want your favorite photo first? Too bad. Want a folder structure that makes sense? Here&apos;s 47 auto-generated albums instead.
            </p>
            <p className="text-white">
              iFauxto overlays on your existing library. Your photos stay where they are. We just give you the tools Apple forgot.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-32 px-6 border-t border-neutral-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tight mb-6">
            Ready to organize?
          </h2>
          <p className="text-lg text-neutral-400 mb-12">
            Download iFauxto and take control of your photo library.
          </p>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-medium text-lg hover:bg-neutral-100 transition-all"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wide text-neutral-600">Download on the</div>
              <div className="text-xl font-semibold -mt-0.5">App Store</div>
            </div>
          </a>

          <p className="mt-8 text-sm text-neutral-600">
            Requires iOS 17.0 or later
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-sm text-neutral-600">
              iFauxto
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-500">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/support" className="hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
            <p>&copy; {new Date().getFullYear()} iFauxto</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
