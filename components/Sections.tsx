import { JOURNEY, QUESTIONS, TOOLS, tool } from "@/lib/tools";

export function Tools() {
  return (
    <section id="tools" className="relative mx-auto -mt-24 max-w-6xl scroll-mt-4">
      <div className="grid gap-6 md:grid-cols-2">
        {TOOLS.map((t, i) => (
          <a
            key={t.id}
            href={t.url}
            className="group relative flex animate-fade-up flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-xl shadow-berkeley/10 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-2xl hover:ring-gold/60 dark:bg-slate-900 dark:ring-slate-700 sm:p-8"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* soft gold glow in the corner */}
            <span className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/15 blur-2xl transition group-hover:bg-gold/30" aria-hidden />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-berkeley text-3xl shadow-lg shadow-berkeley/30 transition group-hover:scale-110" aria-hidden>
              {t.icon}
            </span>
            <h2 className="relative mt-5 text-2xl font-extrabold tracking-tight text-berkeley dark:text-blue-300">{t.name}</h2>
            <p className="relative mt-1 text-slate-600 dark:text-slate-300">{t.tagline}</p>
            <ul className="relative mt-5 flex-1 space-y-2">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <span className="mt-0.5 text-emerald-600 dark:text-emerald-400" aria-hidden>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <span className="relative mt-7 inline-flex items-center gap-2 self-start rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-berkeley shadow-lg shadow-gold/30 transition group-hover:gap-3">
              {t.cta} <span aria-hidden>→</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Questions() {
  return (
    <section className="mx-auto mt-24 max-w-6xl">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-berkeley dark:text-blue-300 sm:text-4xl">
        Which tool do I need?
      </h2>
      <p className="mt-2 text-center text-slate-500 dark:text-slate-400">Pick the question that sounds like yours.</p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {QUESTIONS.map(({ q, tool: id }) => {
          const t = tool(id);
          return (
            <li key={q}>
              <a
                href={t.url}
                className="group flex h-full items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-berkeley/10 hover:ring-gold/60 dark:bg-slate-900 dark:ring-slate-700"
              >
                <span className="text-2xl" aria-hidden>💬</span>
                <span className="min-w-0 flex-1 font-medium text-slate-800 dark:text-slate-100">{q}</span>
                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-berkeley/10 px-3 py-1 text-xs font-semibold text-berkeley transition group-hover:bg-gold group-hover:text-berkeley dark:bg-blue-400/15 dark:text-blue-200">
                  <span aria-hidden>{t.icon}</span>
                  {t.name.replace("EECS ", "")}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function Journey() {
  return (
    <section className="mx-auto mt-24 max-w-6xl">
      <h2 className="text-center text-3xl font-extrabold tracking-tight text-berkeley dark:text-blue-300 sm:text-4xl">
        Built to work <span className="text-gold-dark dark:text-gold">together</span>
      </h2>
      <p className="mt-2 text-center text-slate-500 dark:text-slate-400">Each tool links to the others, so you can move from one to the next.</p>

      <ol className="relative mt-12 grid gap-6 md:grid-cols-4">
        {/* gold line through the steps on wide screens */}
        <span className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-0.5 bg-linear-to-r from-gold/20 via-gold to-gold/20 md:block" aria-hidden />
        {JOURNEY.map((j, i) => {
          const t = tool(j.tool);
          return (
            <li key={j.when} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-2xl shadow-lg shadow-gold/30 ring-8 ring-[#f4f6fb] dark:ring-[#0b1220]" aria-hidden>
                {t.icon}
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-gold-dark dark:text-gold">{i + 1}. {j.when}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{j.text}</p>
              <a href={t.url} className="mt-3 text-sm font-semibold text-berkeley-light hover:text-gold-dark dark:text-blue-300 dark:hover:text-gold">
                {t.name} →
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
