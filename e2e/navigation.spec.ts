import { test, expect } from "@playwright/test";

test.describe("Single Page Navigation", () => {
  test("homepage renders all core sections with valid anchor targets", async ({
    page,
  }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("adotshelor_intro_seen", "true");
    });
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    const navLabels = await page
      .locator('nav[aria-label="Primary"] ul a')
      .allTextContents();
    expect(navLabels).toEqual([
      "Home",
      "About",
      "Services",
      "Projects",
      "Our Approach",
    ]);

    // Verify all primary sections exist
    const sections = ["home", "services", "approach", "projects", "about"];
    for (const id of sections) {
      const section = page.locator(`section#${id}`);
      await expect(section).toBeAttached();
    }
  });

  test("clicking navbar links scrolls smoothly to target sections", async ({
    page,
  }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("adotshelor_intro_seen", "true");
    });
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Click Services anchor
    const menuButton = page.getByRole("button", { name: "Menu" });
    if (await menuButton.isVisible()) {
      await menuButton.click();
    }

    const servicesLink = page.locator('a[href="#services"]:visible').first();
    await expect(servicesLink).toBeVisible();
    await servicesLink.click();

    // Verify Services section is visible in viewport
    const servicesSection = page.locator("section#services");
    await expect(servicesSection).toBeInViewport();
    const servicesHeading = servicesSection.locator("h2.scroll-float");
    await expect(servicesHeading).toBeVisible();
    await expect(servicesHeading).toContainText(
      "Take your business from offline to online."
    );

    const contactLink = page.getByRole("link", {
      name: "Chat with ADOT SHEL OR on WhatsApp",
    });
    await expect(contactLink).toBeVisible();
  });
});
