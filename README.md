# UC Berkeley EECS Hub

The front door to five free tools for UC Berkeley EECS students:

| Tool | What it does |
| --- | --- |
| [EECS Planner](https://eecs-planner.vercel.app) | Maps your whole degree, semester by semester, with AP credit, focus tracks and an AI advisor |
| [EECS Prereqs](https://eecs-prereqs.vercel.app) | What every EECS course needs first, the full chain, and what it unlocks |
| [EECS Electives](https://eecs-electives.vercel.app) | A five-question quiz that ranks upper-division electives for you |
| [EECS Links](https://eecs-links.vercel.app) | Every important Berkeley link in one place |
| [Internship Finder](https://find-internships.vercel.app) | U.S. internships and jobs at every level, refreshed daily, with filters for level, location and company size |

## Features

- A card for each tool, a **"Which tool do I need?"** section that matches common questions to the right one, and how the tools fit together through the years.
- **Jump to a course:** type a code or name (e.g. "CS 170" or "machine learning") to open its prerequisites on EECS Prereqs. Arrow keys and Enter work.
- A 🏠 button in every site's switcher leads back here.
- Light and dark mode, and a layout that works on phones.

## Running locally

```bash
npm install
npm run dev
```

Open `http://localhost:3004`. The tools run locally on ports 3000 (planner), 3001 (links), 3002 (prereqs) and 3003 (electives); in development the links point there.

GitHub Actions typechecks, lints and builds the site on every push (`.github/workflows/ci.yml`). An accessibility check (axe, in Playwright) runs on the home page and the course search in light and dark mode; run it locally with `npx playwright test` (it starts the dev server, or set `PORT` if 3004 is taken).

## Course data

`data/courses.json` (for the course search) comes from EECS Prereqs. A GitHub Action (`.github/workflows/sync-course-data.yml`) syncs it every Monday and opens a pull request when it changed (enable **Settings → Actions → General → Allow GitHub Actions to create and approve pull requests**). To refresh it by hand:

```bash
npm run sync-data                                        # from https://eecs-prereqs.vercel.app/courses.json
npm run sync-data -- ../eecs-prereqs/data/courses.json   # or from a local copy
```

## Settings

`NEXT_PUBLIC_FEEDBACK_URL` (optional) is a Google Form link; when it's set, the footer shows a "💬 Send feedback" button. Visits are counted with [Vercel Web Analytics](https://vercel.com/docs/analytics) (no cookies); turn it on under the project's **Analytics** tab.

This is an unofficial student resource, not affiliated with UC Berkeley.

## Across the EECS sites

Courses marked as taken travel with the links between the EECS sites (`?taken=CS61A.CS61B`), so students enter them once. `lib/handoff.ts` and `components/SuiteLinks.tsx` do this and are the same in all five sites; change them in all five. Each site also has a link preview image (`app/opengraph-image.tsx`), a sitemap and a robots file.
