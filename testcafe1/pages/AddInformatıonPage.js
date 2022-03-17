import { Selector, t } from 'testcafe';
class addInformatıon {

    getFırstNameLocator(){
        return Selector('#first-name');
    }
    getLastNameLocator(){
        return Selector('#last-name');
    }
    getPostalCodeLocator(){
        return Selector('#postal-code');
    }
    getContınueButton(){
        return Selector('#continue');
    }
    async typeInformation(firstName, lastName,postalCode){

        await t
            .typeText(this.getFırstNameLocator(), firstName)
            .typeText(this.getLastNameLocator(), lastName)
            .typeText(this.getPostalCodeLocator(), postalCode);

    }

    async clickContinue(){
        await t
            .click(this.getContınueButton())
            .wait(5000);
    }
}
export  default  new addInformatıon();