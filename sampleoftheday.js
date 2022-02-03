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
  await page.goto('https://freesound.org/home/login/?next=/');

  // // - Acessa a página de login
  // await page.click('[href="login.php"]');

// achando o login e senha (campos) e preenchendo com os nossos

  await page.type('#id_username', 'mcamara.develop@gmail.com')
  await page.type('#id_password', 'ViRtUdE@09828')


  await page.click('[value="login"]')

  // await page.waitForNavigation();

  // ACESSAR essa pagina
  await page.goto('https://freesound.org/browse/');

  await page.click('.title');


  await page.waitForSelector('a[title="download sound"]');


  await page.click('a[title="download sound"]');



  



  // await browser.close();
})();