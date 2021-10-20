import { Selector } from 'testcafe'
import { CART_ITEMS } from '../data/Constants'
import { t } from 'testcafe'

class OverviewPage {
    constructor() {
        this.item_added_Name = Selector('div.inventory_item_name')
        this.btnFinish = Selector('.btn_action.cart_button')
        this.btnCancel = Selector('.cart_cancel_link.btn_secondary')
        this.orderConfirmation = Selector('span.title')
    }
    async Finish(){
        await t  
        //Verify Items before finishing
        .expect(this.item_added_Name.exists).ok()  
        .expect(this.item_added_Name.innerText).eql(CART_ITEMS.ITEMNAME.itemName)

        .click(this.btnFinish)

        //Verify the order was confirmed
        .expect(this.orderConfirmation.exists).ok()
        .expect(this.orderConfirmation.innerText).eql('CHECKOUT: COMPLETE!')
    }
    async Cancel(){
        await t
          .click(this.btnCancel)
    }
}

export default new OverviewPage()