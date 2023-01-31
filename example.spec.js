// @ts-check
const { test, expect } = require('@playwright/test');

test('cas de user locked out', async ({ page }) => {

  
  await page.goto("https://www.saucedemo.com");
// Create a locator.
  const LocatorUsername = page.getByPlaceholder("Username");
  const LocatorPassword= page.getByPlaceholder("Password");
  const LocatorBouton= page.locator("css=#login-button");
  const LocatorErreur= page.locator('data-test=error')


  await LocatorUsername.fill("locked_out_user")
  await LocatorPassword.fill("secret_sauce")
  await LocatorBouton.click()
  //verif du texte

  await expect(LocatorErreur).toContainText('Epic sadface: Sorry, this user has been locked out.')


});

test('cas problem_user', async ({ page }) => {

  
  await page.goto("https://www.saucedemo.com");
// Create a locator.
  const LocatorUsername = page.getByPlaceholder("Username");
  const LocatorPassword= page.getByPlaceholder("Password");
  const LocatorBouton= page.locator("css=#login-button");


  await LocatorUsername.fill("problem_user")
  await LocatorPassword.fill("secret_sauce")
  await LocatorBouton.click()
  //verif URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  


});

test('cas performance_glitch_user', async ({ page }) => {

  
  await page.goto("https://www.saucedemo.com");
// Create a locator.
  const LocatorUsername = page.getByPlaceholder("Username");
  const LocatorPassword= page.getByPlaceholder("Password");
  const LocatorBouton= page.locator("css=#login-button");


  await LocatorUsername.fill("problem_user")
  await LocatorPassword.fill("secret_sauce")
  await LocatorBouton.click()
  //verif URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  

});

