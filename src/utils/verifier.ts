import { Page, test, Locator } from "@playwright/test";
import { FileUtils } from "./fileUtils";
import { expect } from "../config/playwrightExpect";

export class Verifier {
  constructor() {}

  static async isVisible(locator: Locator, timeout?: number) {
    await expect(locator).toBeVisible({ timeout: timeout });
  }

  static async textForLocator(
    locator: Locator,
    expectedText: string,
    timeout?: number,
  ) {
    await expect(locator).toHaveText(expectedText, { timeout: timeout });
  }

  static async givenPathExists(path: string) {
    expect(await FileUtils.pathExists(path)).toBeTruthy();
  }

  static async pageHasUrl(page: Page, url: string) {
    await expect(page).toHaveURL(url);
  }

  static async pageHasTitle(page: Page, title: string) {
    await expect(page).toHaveTitle(title);
  }

  static async stringContains(firstString: string, secondString: string) {
    expect(firstString).toContain(secondString);
  }

  static async stringEquals(firstString: string, secondString: string) {
    expect(firstString).toEqual(secondString);
  }

  static async stringTypeArrayEquals(
    firstStringTypeArray: string[],
    secondStringTypeArray: string[],
  ) {
    expect(firstStringTypeArray.sort()).toEqual(secondStringTypeArray.sort());
  }

  static async verifyInputFieldHasValue(locator: Locator, text: string) {
    await expect(locator).toHaveValue(text);
  }
}
