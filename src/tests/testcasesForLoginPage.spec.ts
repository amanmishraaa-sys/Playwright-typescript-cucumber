import { test } from "../fixtures/fixtures";

test.describe("Test cases related to Login Page", () => {
    test("Verify that user is able to enter username and password without any issue", async ({ loginPage }) => {
        await loginPage.enterUsername("Something");
        await loginPage.enterPassword("Password");
    });

    test("Verify that user get Enter Valid Email error on entering an invalid email", async ({ loginPage }) => {
        await loginPage.enterUsername("Something");
        await loginPage.enterPassword("password");
        await loginPage.clickLoginButton();
        await loginPage.verifyTheErrorMessageForTheField();
    });
});