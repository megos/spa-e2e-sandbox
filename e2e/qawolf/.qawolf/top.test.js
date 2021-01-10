const { assertElementText } = require("qawolf");
const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("top", async () => {
  const page = await context.newPage();
  await page.goto("http://localhost:8080/", { waitUntil: "domcontentloaded" });
  await page.click('[name="id"]');
  await page.fill('[name="id"]', "user1");
  await page.press('[name="id"]', "Tab");
  await page.fill('[name="password"]', "user1password");
  await page.click(".MuiButton-root");
  await page.click("text=5");
  await assertElementText(page, 'div', 'hello: 5')
  await page.click(".MuiButton-root");
  await assertElementText(page, 'h6', 'Login')
});