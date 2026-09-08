import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { ShoppingPage } from "../pages/shoppingPage";

type Fixtures = {
    loginPage: LoginPage;
    shoppingPage: ShoppingPage;
}

export const test = base.extend<Fixtures>({
    loginPage: async({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        use(loginPage);
    }
});