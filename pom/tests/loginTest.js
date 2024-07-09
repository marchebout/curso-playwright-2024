import loginPage from '../pages/loginPage'
import inventoryPage from '../pages/inventoryPage'
import { URL, CREDENTIALS, MESSAGES } from '../data/constants'

fixture`Login test suite`
    .page`${URL.URL_BASE_CURSO}`

test('User must be logged in successfully', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.USER_BASE_CURSO,CREDENTIALS.VALID_CREDENTIALS.PASS_BASE_CURSO)
    await t.expect(inventoryPage.title.exists).ok()
})

test('Error message when User and Pass are incorrect', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_CREDENTIALS.INVALID_USER_CURSO,CREDENTIALS.INVALID_CREDENTIALS.INVALID_PASS_CURSO)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.INVALID_USER_AND_PASS)
})


test('Error message when User is missing', async t => {
    await loginPage.submitLoginForm(null,CREDENTIALS.VALID_CREDENTIALS.PASS_BASE_CURSO)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_USER)
})

test('Error message when Pass is missing', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.VALID_CREDENTIALS.USER_BASE_CURSO,null)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_PASS)
})

test('Error message when User and Pass are missing', async t => {
    await loginPage.submitLoginForm(null,null)
    await t.expect(loginPage.title.innerText).contains(MESSAGES.NULL_USER_AND_NULL_PASS)
})
