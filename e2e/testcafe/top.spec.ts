import { Selector } from 'testcafe'

fixture`Getting Started`.page`http://localhost:8080`

test('My first test', async (t) => {
  await t
    .typeText('input[name=id]', 'user1')
    .typeText('input[name=password]', 'user1password')
    // .click(Selector('span').withExactText('Login'))
    .click('.MuiButton-root')

  await t.expect(Selector('h6').innerText).eql('Top')
  // Not working. Why? await t.click(Selector('div').withText('data: 5'))
  await t.click(Selector('div').withExactText('data: 5'))
  await t.expect(await Selector('div').withText('hello: 5').exists).ok()

  await t.click('.MuiButton-root').expect(Selector('h6').innerText).eql('Login')
})
