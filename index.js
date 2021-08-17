require("dotenv").config();
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  // Abre um navegador e acessa a página selecionada

  const page = await browser.newPage();
  await page.goto("https://unsplash.com/");

  // Acessa a página de login

  await page.click('[href="/login"]');

  // Preenche o formulario de login e faz o login

  await page.type('[name="user[email]"]', process.env.UNSPLASH_EMAIL);
  await page.type("#user_password", process.env.UNSPLASH_PASS);
  await page.click('[type="submit"]');

  // Espera pelo final do login e continua para a foto

  await page.waitForNavigation();

  // Acessa a página selecionada

  await page.goto("https://unsplash.com/photos/LzWXPcJg7lk");

  // Da like na foto selecionada

  await page.click('[title="Like photo"]');

  //  await browser.close();
})();
