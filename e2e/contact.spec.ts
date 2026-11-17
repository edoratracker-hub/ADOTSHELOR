import { test, expect } from "@playwright/test";

test.describe("WhatsApp contact", () => {
  test("opens WhatsApp with a prefilled message", async ({ page }) => {
    await page.addInitScript(() => {
      sessionStorage.setItem("adotshelor_intro_seen", "true");
    });
    await page.goto("/");

    await expect(page.locator("#contact")).toHaveCount(0);

    const whatsappButton = page.getByRole("link", {
      name: "Chat with ADOT SHEL OR on WhatsApp",
    });
    await expect(whatsappButton).toBeVisible();
    await expect(whatsappButton).toHaveAttribute(
      "href",
      /https:\/\/wa\.me\/918138953814\?text=/
    );
    await expect(whatsappButton).toHaveAttribute("target", "_blank");

    const href = await whatsappButton.getAttribute("href");
    if (href === null) {
      throw new Error("WhatsApp link is missing its destination.");
    }
    const url = new URL(href);
    expect(url.searchParams.get("text")).toBe(
      "Hi ADOT SHEL OR, I'd like to discuss taking my business online."
    );
  });
});
