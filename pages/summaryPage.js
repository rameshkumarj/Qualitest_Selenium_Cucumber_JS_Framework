//Page file containing the locators and functions for summary page

const { By } = require('selenium-webdriver')
const CreateDriver = require('./driver')
const { expect } = require('chai')
const { Driver } = require('selenium-webdriver/chrome')

//Locator store
const cartRows = '.cart_item'
const cartRowPrice = '.product-subtotal .amount'
const removeItem = '.product-remove a'
var priceArray = []
var noOfItems

class SummaryPage extends CreateDriver {

    //function to validate if all four items added are updated in the cart
    validateCartRows = async () => {
        noOfItems = await driver.findElements(By.css(cartRows))
        expect(noOfItems.length).to.equal(4)
    }

    //function to fetch the item  from the cart which has the least price
    getLowerPriceItem = async () => {
        let amountOfItems = await driver.findElements(By.css(cartRowPrice))
        for (const iterator of amountOfItems) {
            let amount = await iterator.getText()
            let amountNumber = amount.replace('$', '').trim()
            priceArray.push(Number(amountNumber))
        }
    }

    //function to remove the item  from the cart which has the least price
    removeLowPriceItem = async () => {
        priceArray.sort()
        for (const iterator of noOfItems) {
            let price = await iterator.findElement(By.css(cartRowPrice))
            let amountText = await price.getText()
            if (amountText.includes(priceArray[0])) {
                let removeIcon = await iterator.findElement(By.css(removeItem))
                await removeIcon.click()
                await driver.sleep(2000)
            }
            else {
                console.log('Incorrect item - not to be removed')
            }
        }
    }

    //function to validate the number of items in the cart after an item is removed
    revalidateNoOfItems = async () => {
        noOfItems = await driver.findElements(By.css(cartRows))
        expect(noOfItems.length).to.equal(3)
    }
}
module.exports = new SummaryPage;