import { Selector } from 'testcafe'
import { t } from 'testcafe'

class CartPage {
    constructor() {
        this.btnCheckout = Selector('.btn_action.checkout_button')
        this.btnRemove = Selector('.btn_secondary.cart_button')
        this.btnContinueShopping = Selector('.btn_secondary')
    }
    async RemoveItem(){
        await t
          .click(this.btnRemove)
    }
    async ContinueShopping(){
        await t
          .click(this.btnContinueShopping)
    }
    async Checkout(){
        await t
          .click(this.btnCheckout)
    }
}

export default new CartPage()