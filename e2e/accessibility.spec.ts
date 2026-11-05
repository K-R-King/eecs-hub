import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

// Automated accessibility check (axe): fails on serious or critical problems such as
// unreadable contrast, controls without labels, or broken ARIA.

async function problems(page: Page, only?: string) {
  // let fade-ins finish first: half-faded text would fail the contrast check (looping animations never end)
  await page.evaluate(() =>
    Promise.all(document.getAnimations().filter((a) => a.effect?.getComputedTiming().iterations !== Infinity).map((a) => a.finished)),
  );
  const axe = new AxeBuilder({ page });
  if (only) axe.include(only);
  const results = await axe
    // the floating course tags in the header are decorative and hidden from screen readers
    .exclude("header .pointer-events-none")
    .analyze();
  return results.violations
    .filter((v) => v.impact === "serious" || v.impact === "critical")
    .map((v) => `${v.id}: ${v.help} (${v.nodes.length}) e.g. ${v.nodes[0]?.target.join(" ")}`);
}

test("the home page has no serious accessibility problems", async ({ page }) => {
  await page.goto("/");
  expect(await problems(page)).toEqual([]);
});

test("dark mode has no serious accessibility problems", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  expect(await problems(page)).toEqual([]);
});

test("the course search's suggestions have no serious accessibility problems", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("combobox", { name: "Jump to a course" }).fill("cs 1");
  await expect(page.getByRole("listbox")).toBeVisible();
  // only the search: the open list covers the stats below it, which axe would measure against the list
  expect(await problems(page, "#jump, #jump-results")).toEqual([]);
});
