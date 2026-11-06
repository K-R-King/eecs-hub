import { expect, test } from "@playwright/test";

test("taken courses go to the EECS tools but not to Internship Finder", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => localStorage.setItem("eecs-suite:taken", '["CS61A"]'));
  await page.reload();

  // links pick up the list when pressed, which only works once the page has loaded, so keep pressing
  const planner = page.getByRole("link", { name: /Plan my degree/ });
  await expect(async () => {
    await planner.dispatchEvent("pointerdown");
    expect(await planner.getAttribute("href")).toMatch(/\?taken=CS61A$/);
  }).toPass();

  const finder = page.getByRole("link", { name: /Find internships/ });
  await finder.dispatchEvent("pointerdown");
  await expect(finder).not.toHaveAttribute("href", /taken/);
});
