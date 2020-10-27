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
    // (await (await driver).switchTo().alert()).sendKeys("guru99");
    // (await (await driver).switchTo().alert()).accept();
    // (await (await driver).switchTo().alert()).sendKeys("guru99");
    // (await (await driver).switchTo().alert()).accept();
  } catch (err) {
    throw Error(err);
  }
}());