import { Page, Locator } from "@playwright/test";
import { expect } from "../config/playwrightExpect";

export class LoginPage{

    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginUrl: string;
    readonly loginButton: Locator;
    readonly validEmailErrorMessage: Locator;

    constructor(readonly page: Page){
        this.page = page;
        this.usernameField = this.page.locator('#userEmail');
        this.passwordField = this.page.locator("#userPassword");
        this.loginUrl = "https://rahulshettyacademy.com";
        this.loginButton = this.page.locator("#login");
        this.validEmailErrorMessage = this.page.getByText('*Enter Valid Email');
    }

    async navigateToLoginPage(){
        await this.page.goto(this.loginUrl+"/client/#/auth/login");
        await this.page.waitForLoadState('networkidle');
    }

    async enterUsername(username: string){
        await this.usernameField.fill(username);
    }

    async enterPassword(password: string){
        await this.passwordField.fill(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async verifyTheErrorMessageForTheField(){
        await expect(this.validEmailErrorMessage).toBeVisible();
    }
}