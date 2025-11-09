import { expect, type Locator, type Page } from "@playwright/test";
import { RozetkaComputersNotebooksPage } from "./rozetka-computers-notebooks-page";


export class RozetkaHomePage {
    readonly page: Page;
    readonly computersNotebooksLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.computersNotebooksLink = page.getByRole('link', { name: 'Ноутбуки та комп’ютери' });
    }

    async goto() {
        await this.page.goto('https://rozetka.com.ua');
        await expect(this.page).toHaveURL('https://rozetka.com.ua');
    }

    async openComputersNotebooks() {
        await this.computersNotebooksLink.click();
        return new RozetkaComputersNotebooksPage(this.page);
    }
}