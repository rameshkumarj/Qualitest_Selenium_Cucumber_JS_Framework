//steps file containing all the step definitions

const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const productPage = require('../../pages/productPage')
const basePage = require('../../pages/driver')
const { setDefaultTimeout } = require('@cucumber/cucumber');
const summaryPage = require('../../pages/summaryPage');
setDefaultTimeout(60 * 1000)

Before(async () => {
    await driver.get('https://cms.demo.katalon.com/')
})

After(function () {
    driver.quit()
})

Given('I add four random items to my cart', async () => {
    await productPage.addFourItems()
});


When('I view my cart', async () => {
    await productPage.clickViewCart()
});


Then('I find total four items listed in my cart', async () => {
    await summaryPage.validateCartRows()
});


When('I search for lowest price items', async () => {
    await summaryPage.getLowerPriceItem()
});

When('I am able to remove the lowest price item from my cart', async () => {
    await summaryPage.removeLowPriceItem()
});


Then('I am able to verify three items in my cart', async () => {
    await summaryPage.revalidateNoOfItems()
});

