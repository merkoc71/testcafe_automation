
import { Selector, t } from 'testcafe';
class checkToSumValue {

  async   checkToValue(){
      const backPackPriceSelector = await Selector("div").find(".inventory_item_price");
      const tshirtPriceSelector= await Selector('#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div');
      const totalPriceSelector = await Selector("div").find(".summary_subtotal_label");
      const backPackPriceLocator = await backPackPriceSelector();
      const tshirtPriceLocator = await tshirtPriceSelector();
      const totalPriceLocator = await totalPriceSelector();
      const backPackPriceText =backPackPriceLocator.innerText.substring(1);
      const tshirtPriceText = tshirtPriceLocator.innerText.substring(1);
      const totalPriceText = totalPriceLocator.innerText.substring(13);
      let backPackFloat=parseFloat(backPackPriceText);
      let tshirtFloat=parseFloat(tshirtPriceText);
      let sumPrice=String(backPackFloat+tshirtFloat);
      await t.expect(sumPrice).contains(totalPriceText);
    }
}
export  default new checkToSumValue();
