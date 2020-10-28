require('chromedriver');
let webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');
let proxy = require('selenium-webdriver/proxy');
let opts = new chrome.Options();

//Configs
let configs = require('../configs/configs');

(async function testLogin() {
  opts.setProxy(proxy.manual({
    http: '<HOST:PORT>'
  }));
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts)
    .build();
  try {
    await driver.get(configs.pageUrl);
    (await driver).findElement(webdriver.By.id("email")).sendKeys(configs.Admin.email);
    (await driver).findElement(webdriver.By.id("password")).sendKeys(configs.Admin.password);
  } catch (err) {
    throw Error(err);
  }
}());