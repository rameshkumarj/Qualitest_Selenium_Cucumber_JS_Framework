//Page file containing the locators and functions for product page

const { By } = require('selenium-webdriver')
const CreateDriver = require('./driver')
const { expect } = require('chai')
//locator store
const cartLocator = 'a[href="https://cms.demo.katalon.com/cart/"'
const cartPageTitle = '.page-title'
const item1 = 'a[data-product_id="25"]'
const item2 = 'a[data-product_id="26"]'
const item3 = 'a[data-product_id="27"]'
const item4 = 'a[data-product_id="54"]'

class ProductPage extends CreateDriver {

    //function to add four items to the cart
    addFourItems = async () => {
        await driver.findElement(By.css(item1)).then(async (ele) => {
            await ele.click();
            await driver.sleep(1000)
        });
        await driver.findElement(By.css(item2)).then(async (ele) => {
            await ele.click();
            await driver.sleep(1000)
        });
        await driver.findElement(By.css(item3)).then(async (ele) => {
            await ele.click();
            await driver.sleep(1000)
        });
        await driver.findElement(By.css(item4)).then(async (ele) => {
            await ele.click();
            await driver.sleep(1000)
        });

    }

    //function to navigate to the cart and validate the title
    clickViewCart = async () => {
        let cart = await driver.findElement(By.css(cartLocator))
        await cart.click()
        let pageTitle = await driver.findElement(By.css(cartPageTitle)).getText()
        expect(pageTitle).to.equal('Cart')
    }
};
module.exports = new ProductPage;