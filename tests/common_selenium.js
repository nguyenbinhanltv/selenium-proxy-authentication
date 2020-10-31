require('chromedriver');
let webdriver = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');

//Configs
let configs = require('../configs/configs');

(async function testCommon() {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  try {
    await driver.get(configs.commonPageUrl);

    //Documentation (Find Elements)
    (await driver)
    .findElements(webdriver.By.className("nav-item"))
      .then(data => data[3].sendKeys("webdriver", webdriver.Key.ENTER))
      .then(() => {
        setTimeout(() => {
          //WebDriver (Find Elements, Find Element From Element)
          driver
            .findElement(webdriver.By.id("search-by"))
            .sendKeys("WebDriver");
        }, 5000);
      });

  } catch (err) {
    throw Error(err);
  }
}());

(async function testCommon1() {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  try {
    await driver.get("https://www.google.com/");

    //Documentation (Find Elements)
    let searchBox = (await driver)
      .findElement(webdriver.By.css('[name="q"]'));

    let find = (await driver)
      .findElement(webdriver.By.css('[name="btnK"]'));
    
    searchBox.sendKeys("Selenium WebDriver");
    setTimeout(() => {
      find.sendKeys(webdriver.Key.ENTER);
    }, 2000);

  } catch (err) {
    throw Error(err);
  }
}());

(async function testCommon2() {
  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  try {
    await driver.get("https://www.google.com.vn/imghp?hl=vi&tab=wi&ogbl");

    //Documentation (Find Elements)
    let searchBox = (await driver)
      .findElement(webdriver.By.css('[name="q"]'));

    let find = (await driver)
      .findElement(webdriver.By.className("Tg7LZd"));
    
    searchBox.sendKeys("Selenium WebDriver");
    setTimeout(() => {
      find.sendKeys(webdriver.Key.ENTER);
    }, 2000);
    
  } catch (err) {
    throw Error(err);
  }
}());