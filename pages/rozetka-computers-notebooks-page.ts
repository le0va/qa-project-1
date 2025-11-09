import { type Locator, type Page } from "@playwright/test";
import { RozetkaNotebooksPage } from "./rozetka-notebooks-page";


export class RozetkaComputersNotebooksPage {
    readonly page: Page;
    readonly notebooksLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.notebooksLink = page.locator('div').filter({ hasText: 'Ноутбуки' }).nth(4)
    }

    async openNotebooks() {
        await this.notebooksLink.click();
        return new RozetkaNotebooksPage(this.page);
    }
}