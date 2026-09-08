import { After, AfterStep, Before, Status, World, setWorldConstructor } from "@cucumber/cucumber";
import { Browser, Page, chromium } from "@playwright/test";
import { PageObjectManager } from "./pageObjectManager";
import { sharedPlaywrightSettings } from "../../config/playwrightSettings";

export class fixtures extends World {

    browser!: Browser;
    page!: Page;
    pageObjectManager!: PageObjectManager;

    async initChromium() {
        this.browser = await chromium.launch({
            headless: sharedPlaywrightSettings.headless,
        });
        this.page = await this.browser.newPage({
            viewport: sharedPlaywrightSettings.viewport,
        });
        this.pageObjectManager = new PageObjectManager(this.page);
    }

    async cleanup() {
        await this.browser.close();
    }
}

setWorldConstructor(fixtures);

Before(async function (this: fixtures) {
    await this.initChromium();
});

After(async function (this: fixtures) {
    await this.cleanup();
});