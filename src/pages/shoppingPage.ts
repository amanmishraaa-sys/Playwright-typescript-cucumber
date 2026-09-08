import { Page, Locator, expect, test } from "@playwright/test";
import { ActionUtil } from "../utils/actionUtil";
import { Verifier } from "../utils/verifier";

export class ShoppingPage {
    readonly page: Page;
    readonly baseUrl: string = "https://rahulshettyacademy.com";
    readonly shoppingPageUrl: string = "/client/#/dashboard/dash";
  readonly shoppingItem: Locator;
  readonly targetItemForAddButton: (itemName: string) => Locator;
  readonly checkOutButton: Locator;
  readonly actions: ActionUtil;
  constructor(page: Page) {
    this.page = page;
    this.shoppingItem = page.locator("app-card");
    this.targetItemForAddButton = (itemName: string) =>
    this.shoppingItem.filter({ hasText: itemName });
    this.checkOutButton = page.locator("[class='nav-link btn btn-primary']");
    this.actions = new ActionUtil(page);
  }

  async verifyThePageIsLoaded() {
    await this.actions.waitForPageToLoad();
    await Verifier.pageHasUrl(this.page, this.baseUrl + this.shoppingPageUrl);
  }

  async clickOnAddButtonForAnItemWithName(itemName: string) {
      let addButton: Locator =
        this.targetItemForAddButton(itemName).locator("button");
      await this.actions.clickElement(addButton);
  }

  async verifyNumberOfItemsOnCartButton(itemNumber: number) {
      await Verifier.stringContains(
        (await this.checkOutButton.textContent()) || "",
        itemNumber.toString(),
      );
  }
}