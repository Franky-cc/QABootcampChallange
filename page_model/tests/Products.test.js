import { standard_user } from '../data/Roles'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'

fixture('Inventory feature testing')
  .page(`https://www.saucedemo.com/`)
  .beforeEach(async t => {
    await t
      .useRole(standard_user)
  })
//Expected: Validate the products have been sorted by price correctly
test('D. Sort products by Price (low to high)', async t => {
    await InventoryPage.SelectSortBy()
})
//Expected: Validate all the items that have been added to the shopping cart.
test('E. Add multiple items to the shopping cart', async t => {
  await InventoryPage.addMultipleItemsToCart()
})
//Expected: Validate the correct product was added to the cart.
test('F. Add the specific product ‘Sauce Labs Onesie’ to the shopping cart', async t => {
  await InventoryPage.addItemToCart()
})
//Expected: Validate the user navigates to the order confirmation page.
test('G. Complete a purchase', async t => {
  await InventoryPage.addItemToCart()
  await InventoryPage.openCart()
  await CartPage.Checkout()
  await CheckoutPage.FillForm()
  await OverviewPage.Finish()
})