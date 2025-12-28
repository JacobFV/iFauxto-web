import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            iFauxto
          </div>
          <div className="flex items-center gap-8">
            <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#why" className="text-sm text-gray-400 hover:text-white transition-colors">
              Why iFauxto
            </Link>
            <Link
              href="#download"
              className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Download
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-white/10 rounded-full text-sm text-purple-300 backdrop-blur-sm">
            Now available on the App Store
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Photos.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
              Your Way.
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Finally, a photo organizer that respects your decisions.
            Drag, drop, nest, and arrange your memories exactly how you want them.
            No algorithms. No &quot;smart&quot; suggestions. Just you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download for iOS
            </a>
            <Link
              href="#features"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              Learn more
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Phone mockup placeholder */}
        <div className="relative mt-16 max-w-sm mx-auto">
          <div className="aspect-[9/19] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] border-4 border-gray-700 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl" />
            <div className="h-full w-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl mb-4">📸</div>
                <p className="text-gray-400 text-sm">App Preview Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Features that actually
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> matter</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              No bloat. No AI that thinks it knows better than you. Just the tools you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all hover:bg-white/10">
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Folders</h3>
              <p className="text-gray-400">
                Create folders that make sense to you. Not &quot;Selfies&quot;, &quot;Screenshots&quot;, and 47 other albums you never asked for.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-pink-500/50 transition-all hover:bg-white/10">
              <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Drag to Reorder</h3>
              <p className="text-gray-400">
                Your favorite photo should be first. Drag it there. We won&apos;t move it back because &quot;recency matters.&quot;
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all hover:bg-white/10">
              <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Nested Folders</h3>
              <p className="text-gray-400">
                Folders within folders. Because sometimes &quot;Vacation&quot; needs &quot;Day 1&quot;, &quot;Day 2&quot;, and &quot;That One Restaurant.&quot;
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/10">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">2.5D Interface</h3>
              <p className="text-gray-400">
                Folders open with a beautiful blur effect. Photos animate into place. It&apos;s not just organization—it&apos;s art.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-green-500/50 transition-all hover:bg-white/10">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">iCloud Sync</h3>
              <p className="text-gray-400">
                Your folder structure syncs across all your devices. Create a folder on iPad, see it on iPhone.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-red-500/50 transition-all hover:bg-white/10">
              <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">No Algorithm</h3>
              <p className="text-gray-400">
                We don&apos;t decide what&apos;s &quot;relevant.&quot; We don&apos;t hide your old photos. You&apos;re in charge. Radical, we know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why we built
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> iFauxto</span>
            </h2>
          </div>

          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <p>
              We love our iPhones. We really do. But every time we open the Photos app,
              we&apos;re reminded that Apple thinks they know better than us.
            </p>
            <p>
              Want to put your favorite photo first? Too bad—it goes at the bottom by date.
              Want to create a folder structure that makes sense? Here&apos;s 47 auto-generated
              albums you&apos;ll never use instead.
            </p>
            <p>
              <span className="text-white font-semibold">iFauxto is different.</span> It overlays
              on top of your existing photo library. Your photos stay where they are—we just
              give you the organizational tools Apple forgot.
            </p>
            <p className="text-gray-500 italic">
              &quot;Unlike some fruit companies, we actually let you choose.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-24 px-6 bg-gradient-to-t from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to take control?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Download iFauxto and organize your photos the way they should have been organized from the start.
          </p>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-semibold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg shadow-white/20"
          >
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wide text-gray-600">Download on the</div>
              <div className="text-2xl font-bold -mt-1">App Store</div>
            </div>
          </a>

          <p className="mt-6 text-sm text-gray-500">
            Requires iOS 17.0 or later. Free to download.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                iFauxto
              </div>
              <p className="text-sm text-gray-500">
                Your photos, your way.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/support" className="hover:text-white transition-colors">
                Support
              </Link>
              <a
                href="mailto:hello@ifauxto.com"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} iFauxto. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
