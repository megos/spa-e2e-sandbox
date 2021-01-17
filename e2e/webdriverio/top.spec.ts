describe('My Login application', () => {
  it('My first test', () => {
    browser.url('http://localhost:8080')

    $('input[name=id]').setValue('user1')
    $('input[name=password]').setValue('user1password')
    $('.MuiButton-root').click()

    browser.pause(3000)
    const $h6 = $('h6')
    // $h6.waitUntil(() =>  $h6.getText() === 'Top')
    expect($h6).toHaveText('Top')

    browser.pause(2000)

    const $data5 = $$('div.MuiPaper-root').find(
      ($elm) => $elm.getText() === 'data: 5',
    )
    $data5.click()

    expect($('.MuiCardContent-root')).toHaveText('hello: 5')

    $('.MuiButton-root').click()

    browser.pause(2000)
    expect($('h6')).toHaveText('Login')
  })
})
