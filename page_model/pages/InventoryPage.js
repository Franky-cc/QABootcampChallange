import { Selector } from 'testcafe'
import { CART_ITEMS } from '../data/Constants'
import { t } from 'testcafe'
import { ClientFunction } from 'testcafe'

const getPageUrl = ClientFunction(() => window.location.href)

class InventoryPage {
  constructor() {
    this.pageTitle = Selector('#product_label')
    this.productName = Selector('div.inventory_list div.inventory_item_name').withText(CART_ITEMS.ITEMNAME.itemName)
    this.addItem = Selector('button#add-to-cart-sauce-labs-onesie.btn.btn_primary.btn_small.btn_inventory')
    this.addToCart = Selector('.btn_primary.btn_inventory')
    this.menu = Selector('.bm-burger-button')
    this.logout = Selector('.bm-item-list a#logout_sidebar_link.bm-item.menu-item')
    this.cart = Selector('a.shopping_cart_link')
    this.productSort = Selector("select.product_sort_container")
    this.CartItemName = Selector('div.inventory_details_name.large_size')
    this.totalItems = Selector('span.shopping_cart_badge')
  }
  async openMenu() {
    await t
      .click(this.menu)
      .click(this.logout)
      .expect(getPageUrl()).eql('https://www.saucedemo.com/');
  }
  async openCart() {
    await t
      .click(this.cart)
  }
  async addItemToCart() {
    await t
      .click(this.productName)
      .click(this.addToCart)

    await t
      .expect(this.totalItems.exists).ok()
      .expect((this.totalItems).innerText).eql('1')
      .expect(this.CartItemName.exists).ok()
      .expect((this.CartItemName).innerText).eql(CART_ITEMS.ITEMNAME.itemName)
  }
  async addMultipleItemsToCart() {
    const navCount = CART_ITEMS.NAVCOUNT.navCount; //total items to add  
    for (let i = 0; i < navCount; i++) {
      await t.click(this.addToCart)
    }

    await t
      .expect(this.totalItems.exists).ok()
      .expect((this.totalItems).innerText).eql(CART_ITEMS.NAVCOUNT.navCount);
  }
  async SelectSortBy() {
    await t
      .click(this.productSort)
      .click(this.productSort.find("option").withText("Price (low to high)"))

      .expect(Selector('span.active_option').innerText).eql('PRICE (LOW TO HIGH)')

    const cellSelector = Selector('div.inventory_list div.inventory_item')
    const priceSelector = Selector('div.inventory_item_price')
    const cellCount = await cellSelector.count
    let price = await priceSelector.nth(0).textContent
    let price2 = await priceSelector.nth(cellCount - 1).textContent
    //First we need to remove the $ and conver the string to number in order to verify if price is lower than price2
    await t.expect(parseInt(price.substring(1, price.length))).lt(parseInt(price2.substring(1, price2.length)), 'Sort by Price (low to high)')
  }
}
export default new InventoryPage()