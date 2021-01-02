//@ts-check
import { chromium } from 'playwright'
import assert from 'assert'
;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')
  const content = await page.textContent('p')
  assert(content === 'Edit src/App.tsx and save to reload.')
  await browser.close()
})()
