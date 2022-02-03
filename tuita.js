require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
      defaultViewport: {
        width:1920,
        height:1080
      }
  });
  const page = await browser.newPage();
  await page.goto('https://twitter.com/login');

  // // - Acessa a página de login
// await page.click('[href="login.php"]');

await typeText(page, 'input[name=session\\5busername_or_email\\5d]', 'testeemail');
  await typeText(page, 'input[name=session\\5bpassword\\5d]', 'pwdteste');
  await click(page, 'input[type=submit]');
  await waitForPageChange(page);

//   await page.click('[type="submit"]')

  await page.waitForNavigation();

  // ACESSAR essa pagina
//   await page.goto('https://digicomex.net.br/dev/dashboard.php');

  // // Like nessa coisa
  // await page.click('[title="Like photo"]')

  



  // await browser.close();
})();