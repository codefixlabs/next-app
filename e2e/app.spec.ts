import { expect, test } from "@playwright/test";

test("renders the Vercel logo with correct alt text", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Use the page to interact with the browser
  const logoElement = await page.$('img[alt="Vercel Logo"]');
  // Expect the logo to be in the document
  expect(logoElement).not.toBeNull();
});
