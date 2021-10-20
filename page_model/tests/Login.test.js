import LoginPage from '../pages/LoginPage'
import { CREDENTIALS } from '../data/Constants'
import { standard_user } from '../data/Roles'
import InventoryPage from '../pages/InventoryPage'
import { ClientFunction } from 'testcafe'

const getPageUrl = ClientFunction(() => window.location.href)

fixture('Login feature testing')
  .page(`https://www.saucedemo.com/`)

//Expected: Validate the user navigates to the INVENTORY page when logged in.
test('A. Login with a valid user', async t => {
  await t.useRole(standard_user)
  await t.expect(getPageUrl()).contains('/inventory.html')
})
//Expected: Validate error message is displayed.
test('B. Login with an invalid user', async t => {
  await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(LoginPage.errorMessage.exists).ok()
  await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})
//Expected: Validate the user navigates to the login page.
test('C. Logout from the home page', async t => {
  await t.useRole(standard_user)
  await InventoryPage.openMenu()
})





