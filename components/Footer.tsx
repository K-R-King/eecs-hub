import { TOOLS } from "@/lib/tools";

// a Google Form (or any page) where students can report problems; the link only shows when it's set
const FEEDBACK_URL = process.env.NEXT_PUBLIC_FEEDBACK_URL;

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-berkeley bg-linear-to-br from-berkeley-dark via-berkeley to-[#0b4a7a] px-4 pt-16 pb-10 text-white">
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 animate-aurora rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Bookmark <span className="text-gold">this page</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-blue-200">
          It&apos;s the front door to all four tools. Share it with anyone starting EECS at Berkeley.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {TOOLS.map((t) => (
            <a key={t.id} href={t.url} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur transition hover:border-gold hover:text-gold">
              {t.icon} {t.name}
            </a>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm sm:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon.svg" alt="" className="h-7 w-7" />
            EECS Hub
          </div>
          <p className="text-center text-xs text-blue-200">
            Unofficial student tools, not affiliated with UC Berkeley. Always confirm requirements with your EECS advisor.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {FEEDBACK_URL && (
              <a
                href={FEEDBACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-berkeley transition hover:bg-gold-dark hover:text-white"
              >
                💬 Send feedback
              </a>
            )}
            <a href="#top" className="rounded-full border border-white/20 px-4 py-1.5 text-xs transition hover:border-gold hover:text-gold">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
