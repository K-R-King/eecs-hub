import CourseJump from "@/components/CourseJump";
import SuiteNav from "@/components/SuiteNav";
import data from "@/data/courses.json";
import { TOOLS } from "@/lib/tools";

const FLOATING_CODES = [
  { code: "CS 61A", className: "left-[6%] top-[22%] -rotate-6 animate-float" },
  { code: "MATH 54", className: "left-[14%] bottom-[18%] rotate-3 animate-float-slow" },
  { code: "CS 189", className: "right-[8%] top-[18%] rotate-6 animate-float-slow" },
  { code: "EECS 151", className: "right-[4%] bottom-[24%] -rotate-3 animate-float" },
];

const STATS = [
  { value: String(TOOLS.length), label: "free tools" },
  { value: String(Object.keys(data.courses).length), label: "EECS courses covered" },
  { value: "0", label: "signups needed" },
  { value: "Official", label: "Berkeley data" },
];

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-linear-to-br from-berkeley-dark via-berkeley to-[#0b4a7a] px-4 pb-36 text-white">
      {/* background: grid + moving glows + floating course codes */}
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 animate-aurora rounded-full bg-gold/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-112 w-md animate-aurora rounded-full bg-berkeley-light/40 blur-3xl [animation-delay:-7s]" />

      {FLOATING_CODES.map((c) => (
        <span
          key={c.code}
          className={`pointer-events-none absolute hidden rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-xs text-blue-100/70 backdrop-blur-sm xl:block ${c.className}`}
        >
          {c.code}
        </span>
      ))}

      {/* nav */}
      <nav className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 py-6">
        <div className="flex items-center gap-2 font-bold tracking-tight">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.svg" alt="" className="h-8 w-8" />
          EECS Hub
        </div>
        <SuiteNav current="home" />
      </nav>

      <div className="relative mx-auto mt-8 grid max-w-6xl items-center gap-12 lg:mt-14 lg:grid-cols-[1.15fr_1fr]">

        {/* pitch */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
            For UC Berkeley EECS students
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Everything EECS,{" "}
            <span className="animate-shimmer bg-linear-to-r from-gold via-amber-200 to-gold bg-size-[200%_auto] bg-clip-text text-transparent">
              in one place
            </span>
            .
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base text-blue-100/90 sm:text-lg lg:mx-0">
            Four free tools that work together: plan your degree, check prerequisites, find your
            electives, and keep every important link a click away.
          </p>

          <CourseJump />

          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#tools"
              className="rounded-xl bg-gold px-6 py-3 font-semibold text-berkeley shadow-lg shadow-gold/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              See the tools ↓
            </a>
            <span className="flex items-center gap-4 px-2 text-sm text-blue-200">
              <span>✓ Free</span>
              <span>✓ No signup</span>
            </span>
          </div>
        </div>

        {/* the four tools, connected */}
        <div className="relative mx-auto hidden w-full max-w-md animate-fade-up [animation-delay:200ms] sm:block">
          <div className="absolute -inset-4 rounded-4xl bg-gold/10 blur-2xl" />
          <div className="relative rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <div className="mb-5 flex items-center justify-between text-xs text-blue-100">
              <span className="font-semibold uppercase tracking-wider">Your EECS toolkit</span>
              <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-300">● all free</span>
            </div>

            <div className="relative space-y-4">
              {/* gold line tying the tools together */}
              <svg className="absolute top-6 left-5.5 h-[calc(100%-3rem)] w-1" preserveAspectRatio="none" viewBox="0 0 2 100" aria-hidden>
                <line x1="1" y1="0" x2="1" y2="100" stroke="#FDB515" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100" className="animate-draw" />
              </svg>

              {TOOLS.map((t, i) => (
                <a
                  key={t.id}
                  href={t.url}
                  className="relative flex animate-fade-up items-center gap-4 rounded-xl bg-white/10 px-3 py-3 transition hover:bg-white/20"
                  style={{ animationDelay: `${400 + i * 200}ms` }}
                >
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-base ring-4 ring-berkeley" aria-hidden>
                    {t.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block truncate text-xs text-blue-200">{t.tagline}</span>
                  </span>
                  <span className="text-gold" aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* stats */}
      <dl className="relative mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-berkeley-dark/40 px-4 py-4 text-center">
            <dt className="text-2xl font-extrabold text-gold">{s.value}</dt>
            <dd className="text-xs text-blue-200">{s.label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
