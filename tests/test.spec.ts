import { test } from '@playwright/test';
import { RozetkaHomePage } from '../pages/rozetka-home-page';


test('log first notebook', async ({ page }) => {
  const rozetkaHome = new RozetkaHomePage(page);
  await rozetkaHome.goto();
  
  const computersNotebooksPage = await rozetkaHome.openComputersNotebooks();
  const notebooksPage = await computersNotebooksPage.openNotebooks();

  const firstNotebook = await notebooksPage.getFirstProduct();
  console.log(firstNotebook);
});