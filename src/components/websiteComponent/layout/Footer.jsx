import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#171310] text-white mt-10">
      <div className="container mx-auto px-6 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Nestro.
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-6">
              Curated furniture for thoughtful homes.
              Crafted with intention, made to endure.
            </p>

            <div className="flex overflow-hidden rounded-xl border border-zinc-700">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-3 outline-none"
              />

              <button className="bg-[#C6A27E] px-5 text-black font-medium">
                Subscribe
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-5">
              Company
            </h3>

            <div className="space-y-3">
              <Link
                href="/about"
                className="block text-zinc-400 hover:text-white"
              >
                Our Story
              </Link>

              <Link
                href="/sustainability"
                className="block text-zinc-400 hover:text-white"
              >
                Sustainability
              </Link>

              <Link
                href="/showrooms"
                className="block text-zinc-400 hover:text-white"
              >
                Showrooms
              </Link>

              <Link
                href="/careers"
                className="block text-zinc-400 hover:text-white"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-5">
              Support
            </h3>

            <div className="space-y-3">
              <Link
                href="/track-order"
                className="block text-zinc-400 hover:text-white"
              >
                Track Order
              </Link>

              <Link
                href="/returns"
                className="block text-zinc-400 hover:text-white"
              >
                Returns & Exchange
              </Link>

              <Link
                href="/assembly-help"
                className="block text-zinc-400 hover:text-white"
              >
                Assembly Help
              </Link>

              <Link
                href="/contact"
                className="block text-zinc-400 hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-5">
              Follow Us
            </h3>

            <div className="space-y-3">
              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                Instagram
              </Link>

              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                Pinterest
              </Link>

              <Link
                href="#"
                className="block text-zinc-400 hover:text-white"
              >
                Houzz
              </Link>
            </div>

            <div className="flex gap-3 mt-6">

              <button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[#C6A27E] hover:text-black transition">
               ins
              </button>

              <button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[#C6A27E] hover:text-black transition">
                Pin
              </button>

              <button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-[#C6A27E] hover:text-black transition">
             You
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between gap-4 text-sm text-zinc-500">

          <p>
            © 2026 Nestro. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/sitemap">
              Sitemap
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}