import { Given, When } from "@cucumber/cucumber";

Given(`Navigate to the Login page`, async function () {
    await this.pageObjectManager.loginPage.navigateToLoginPage();
});

When (`Enter username as {string} in username field`, async function(username: string) {
    await this.pageObjectManager.loginPage.enterUsername(username);
});

When (`Enter password as {string} in password field`, async function(password: string) {
    await this.pageObjectManager.loginPage.enterPassword(password);
});

Given (`Login with username: {string} and password: {string}`, async function(username: string, password: string) {
    await this.pageObjectManager.loginPage.navigateToLoginPage();
    await this.pageObjectManager.loginPage.enterUsername(username);
    await this.pageObjectManager.loginPage.enterPassword(password);
    await this.pageObjectManager.loginPage.clickLoginButton();
    await this.pageObjectManager.shoppingPage.verifyThePageIsLoaded();
});