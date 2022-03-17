import { Selector, t } from 'testcafe';
class addToCartPage {

    getSauceLabBackPackItem(){
        return Selector('#add-to-cart-sauce-labs-backpack');
    }

    getSauceLabTshirtItem(){
        return Selector('#add-to-cart-sauce-labs-bolt-t-shirt');
    }
    getShoppingCartContainerButton(){
        return Selector('#shopping_cart_container');
    }

    async selectItems(){
        await t
            .click(this.getSauceLabBackPackItem())
            .click(this.getSauceLabTshirtItem())
    }
    async getCartPage(){
        await t.
        click(this.getShoppingCartContainerButton());
    }
}
export default new addToCartPage();