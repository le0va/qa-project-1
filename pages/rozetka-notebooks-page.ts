import { type Locator, type Page } from "@playwright/test";


export class RozetkaNotebooksPage {
    readonly page: Page;
    readonly productTiles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productTiles = page.locator('rz-product-tile');
    }

    async getFirstProduct() {
        const firstProduct = this.productTiles.first();
        const name = await firstProduct.locator('.tile-title').textContent();
        const price = await firstProduct.locator('.price').textContent();

        return { name, price };
    }
}