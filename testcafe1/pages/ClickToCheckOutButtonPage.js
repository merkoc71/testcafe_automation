import { Selector, t } from 'testcafe';
class clickToCheckOutButtonPage {
    getCheckOutButton() {
        return Selector('#checkout');
    }
    async getCheckOut(){
        await t.
        click(this.getCheckOutButton());
        //stepone'a atacak
    }
}
export default new clickToCheckOutButtonPage();