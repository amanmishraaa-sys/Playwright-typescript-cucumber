import { Page } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";
import { ShoppingPage } from "../../pages/shoppingPage";

export class PageObjectManager {

    readonly loginPage: LoginPage;
    readonly shoppingPage: ShoppingPage;

    constructor(readonly page: Page) {
        this.loginPage = new LoginPage(this.page);
        this.shoppingPage = new ShoppingPage(this.page);
    }

}