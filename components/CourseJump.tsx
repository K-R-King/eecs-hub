"use client";

import { useState } from "react";
import data from "@/data/courses.json";
import { withTaken } from "@/lib/handoff";
import { siteUrl } from "@/lib/suite";

type Course = { code: string; display: string; title: string };
const COURSES = [...Object.values(data.courses), ...Object.values(data.outside)] as Course[];

const number = (code: string) => parseInt(code.match(/\d+/)?.[0] ?? "0", 10);

function search(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const compact = q.replace(/\s+/g, "").replace(/^compsci/, "cs").replace(/^eleng/, "ee");
  return COURSES
    .map((c) => {
      const code = c.code.toLowerCase();
      // exact code first, then codes that start with it, then anything mentioning it
      const rank = code === compact ? 0 : code.startsWith(compact) ? 1 : code.includes(compact) ? 2 : c.title.toLowerCase().includes(q) ? 3 : -1;
      return { c, rank };
    })
    .filter((x) => x.rank >= 0)
    .sort((a, b) => a.rank - b.rank || number(a.c.code) - number(b.c.code))
    .slice(0, 6)
    .map((x) => x.c);
}

// jump straight to a course's prerequisites on EECS Prereqs
export default function CourseJump() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const results = search(query);
  const go = (c: Course) => window.location.assign(withTaken(`${siteUrl("prereqs")}/#${c.code}`));

  return (
    <div className="relative mx-auto mt-8 max-w-xl lg:mx-0">
      <label htmlFor="jump" className="sr-only">Jump to a course</label>
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-blue-200" aria-hidden>🔍</span>
      <input
        id="jump"
        type="search"
        autoComplete="off"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setActive(0); }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
          if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
          if (e.key === "Enter" && results[active]) go(results[active]);
          if (e.key === "Escape") setQuery("");
        }}
        role="combobox"
        aria-expanded={results.length > 0}
        aria-controls="jump-results"
        aria-activedescendant={results.length ? `jump-${results[active]?.code}` : undefined}
        placeholder="Jump to a course: CS 170, machine learning…"
        className="w-full rounded-2xl border border-white/20 bg-white/10 py-4 pl-12 pr-4 text-base text-white placeholder:text-blue-200/80 backdrop-blur focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
      />
      {results.length > 0 && (
        <ul id="jump-results" role="listbox" className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl bg-white text-left shadow-2xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700">
          {results.map((c, i) => (
            <li key={c.code} id={`jump-${c.code}`} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => go(c)}
                className={`flex w-full items-baseline gap-3 px-4 py-3 text-left transition ${i === active ? "bg-gold/15" : ""}`}
              >
                <span className="shrink-0 font-bold text-berkeley dark:text-blue-300">{c.display}</span>
                <span className="truncate text-sm text-slate-600 dark:text-slate-400">{c.title}</span>
                <span className="ml-auto shrink-0 text-xs font-semibold text-gold-dark dark:text-gold">Prereqs →</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
