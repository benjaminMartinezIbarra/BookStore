import { AppPage } from './app.po';
import {CatalogPage} from './catalog.po';
import {CartPage} from './cart.po';

describe('workspace-project App', () => {
  const page  = new AppPage();
  const catalogPage = new CatalogPage();
  const cartPage = new CartPage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('should display title', () => {
    expect(page.getParagraphText()).toEqual('Welcome to bookstore!');
  });

  it('should display a catalog more than 10 books', () => {
    expect(catalogPage.getRowsCount()).toBeGreaterThan(10);
    expect(catalogPage.getAuthorOnRow(0)).toContain('Alain');

  });

  it('should buy books', () => {
    catalogPage.buyBooksOnRow(0);
  expect(cartPage.getRowsCount()).toEqual(1);
  expect(cartPage.getAuthorOnRow(0)).toContain('Alain');
  expect(cartPage.getQuantityOnRow(0)).toEqual(1);

    // revenir au catalogue
    page.clickOnMenu('Catalogue');
    //second livre
    catalogPage.buyBooksOnRow(1);
    expect(cartPage.getRowsCount()).toEqual(2);
    expect(cartPage.getQuantityOnRow(0)).toEqual(1);
    expect(cartPage.getQuantityOnRow(1)).toEqual(1);
    expect(cartPage.getTotalQuantity()).toEqual('2 art.');
    expect(cartPage.getTotalPrice()).toEqual('€20.80');
    //changer quantité sur la première ligne
    cartPage.setQuantityOnRow(0, 3);
    expect(cartPage.getTotalQuantity()).toEqual('4 art.');


  });
});
