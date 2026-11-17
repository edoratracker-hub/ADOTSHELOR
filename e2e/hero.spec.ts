import { test, expect } from "@playwright/test";

test.describe("Hero section and calls to action", () => {
  test("explains the offer and links to the next steps", async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("adotshelor_intro_seen", "true");
    });
    await page.goto("/");

    const headline = page.locator("h1.hero__title");
    await expect(headline).toBeVisible();
    await expect(headline).toContainText("Your next step is online.");
    await expect(headline.locator(".split-char").first()).toBeAttached();
    await expect(page.locator(".hero__eyebrow")).toContainText(
      "Online growth for start-ups"
    );
    await expect(page.locator(".hero__sub")).toContainText(
      "custom software, a clear business identity, and ongoing IT support"
    );

    const ctaPrimary = page.locator("a.hero__go");
    await expect(ctaPrimary).toHaveAttribute(
      "href",
      /https:\/\/wa\.me\/918138953814\?text=/
    );
    await expect(ctaPrimary).toContainText("Chat on WhatsApp");
    await expect(ctaPrimary).toHaveAttribute("target", "_blank");

    const ctaSecondary = page.locator("a.hero__secondary");
    await expect(ctaSecondary).toHaveAttribute("href", "#projects");
    await expect(ctaSecondary).toContainText("See Current Projects");
  });
});
