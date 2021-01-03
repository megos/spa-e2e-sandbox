// @ts-check
// npx playwright-cli codegen localhost:8080
import { chromium } from 'playwright'

;(async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext()

  // Open new page
  const page = await context.newPage()

  // Go to http://localhost:8080/
  await page.goto('http://localhost:8080/')

  await page.click('input[name="id"]')
  await page.fill('input[name="id"]', 'user1')
  await page.fill('input[name="password"]', 'user1password')

  // Click //span[normalize-space(.)='Login']
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:8080/' }*/),
    page.click("//span[normalize-space(.)='Login']"),
  ])

  // Click //div[6]/div[normalize-space(.)='data: 5']
  await page.click("//div[6]/div[normalize-space(.)='data: 5']")
  // assert.equal(page.url(), 'http://localhost:8080/details/5');

  // Click //div/div/div/div[normalize-space(.)='hello: 5']
  await page.click("//div/div/div/div[normalize-space(.)='hello: 5']")

  // Click text="Logout"
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://localhost:8080/login' }*/),
    page.click('text="Logout"'),
  ])

  // Close page
  await page.close()

  // ---------------------
  await context.close()
  await browser.close()
})()
