import { expect as playwrightExpect } from "@playwright/test";
import { sharedPlaywrightSettings } from "./playwrightSettings";

export const expect = playwrightExpect.configure({
    timeout: sharedPlaywrightSettings.expectTimeout,
});