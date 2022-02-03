require('dotenv').config();
const puppeteer = require('puppeteer');

const readlineSync = require('readline-sync');

console.log('ROBO QUE BAIXA SAMPLES DO MATHEUS <3');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`, '--profile-directory="Default"'],
      defaultViewport: {
        width:1920,
        height:1080
      }
  });


  function waitFor(delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
  }

  

  const tema = readlineSync.question('Informe um termo de busca: ');
  const qtd = readlineSync.question(`quantos samples de ${tema} você quer baixar? `);



  // console.log(`numero aleatorio é ${numero}`);
  console.log(`vai rolar de baixar sample de ${tema}. Em alguns segundos verifique sua pasta de downloads.`)


  const page = await browser.newPage();

  // // - Acessa a página de login do freesound
  await page.goto('https://freesound.org/home/login/?next=/');
  await waitFor(2000);

  // await page.click('[href="login.php"]');

// achando o login e senha (campos) e preenchendo com os do usuário
  await page.type('#id_username', 'TYPE YOUR USER NAME HERE')
  await page.type('#id_password', 'TYPE YOUR PASSWORD HERE')


  // clicando no botao login

  await page.click('[value="login"]')

  // await page.waitForNavigation();
  await waitFor(2000);



  for (let i = 0; i < `${qtd}`; i++) {

  // gerando numero aleatorio:
  const numero = Math.floor(Math.random() * 10) + 1;

  await page.goto(`https://freesound.org/search/?q=${tema}&page=${numero}#sound`);

 // pegando o link de outro sample

 await page.waitForSelector('.title');
 await page.click('.title');

 await page.waitForSelector('a[title="download sound"]');

 await page.click('a[title="download sound"]');

    }

//  await browser.close();
})();