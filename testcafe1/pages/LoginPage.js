import { Selector, t } from 'testcafe';
class LoginPage {
    constructor () {
        this.userNameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.submitButton = Selector('#login-button');
    }
    //mapping elements
    getUserNameLocator(){
        return Selector('#user-name');
    }
    getPasswordLocator(){
        return Selector('#password');
    }
    getSubmitButton(){
        return Selector('#login-button');
    }
    async login(userName, password){

        await t
            .typeText(this.getUserNameLocator(), userName)
            .typeText(this.getPasswordLocator(), password)
            .click(this.getSubmitButton());
    }
}
export default new LoginPage();



