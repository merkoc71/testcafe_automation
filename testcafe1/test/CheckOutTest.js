import LoginPage from "../pages/LoginPage";
import AddToCartPage from "../pages/AddToCartPage";
import ClickToCheckOutButtonPage from "../pages/ClickToCheckOutButtonPage";
import AddInformatOnPage from "../pages/AddInformatıonPage";
import CheckToSumValuePage from "../pages/CheckToSumValuePage";
fixture`Test is starting`
    .page`https://www.saucedemo.com/`;

const userName = 'standard_user';
const password = 'secret_sauce';
const firstName = 'dogan';
const lastName = 'erkoc';
const postalCode ='11071';

test('Login Test', async t => {
    await t.maximizeWindow();
    await LoginPage.login(userName, password);
    await AddToCartPage.selectItems();
    await AddToCartPage.getCartPage();
    await ClickToCheckOutButtonPage.getCheckOut();
    await AddInformatOnPage.typeInformation(firstName, lastName, postalCode);
    await AddInformatOnPage.clickContinue();
    await CheckToSumValuePage.checkToValue();
});
