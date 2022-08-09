const webdriver = require('selenium-webdriver');
require('chromedriver')
var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
driver.manage().window().maximize();
driver.manage().setTimeouts({implicit: (10000)});

class CreateDriver{
    constructor(){
        global.driver = driver;
    }
}

module.exports = CreateDriver;