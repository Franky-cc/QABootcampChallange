import { USERINFO } from '../data/Constants'
import { Selector } from 'testcafe'
import { t } from 'testcafe'

class CheckoutPage {
    constructor() {
        this.lblfirstname = Selector('input[id="first-name"]')
        this.lbllastname = Selector('input[id="last-name"]')
        this.lblpostalCode = Selector('input[id="postal-code"]')
        this.btnContinue = Selector('.btn_primary.cart_button')
        this.btnCancel = Selector('.cart_cancel_link.btn_secondary')
        this.errorMessage = Selector('h3')
    }
    async FillForm() {
        await t
            .typeText(this.lblfirstname, USERINFO.USERINFO.firstname)
            .typeText(this.lbllastname, USERINFO.USERINFO.lastname)
            .typeText(this.lblpostalCode, USERINFO.USERINFO.zipcode)
            .click(this.btnContinue)
    }
    async Cancel() {
        await t
            .click(this.btnCancel)
    }
}

export default new CheckoutPage()