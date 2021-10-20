import { Selector } from 'testcafe'
import { t } from 'testcafe'

class LoginPage {
  constructor(){
    this.usernameField = Selector('input[name="user-name"]')
    this.passwordField = Selector('input[name="password"]')
    this.btnLogin = Selector('input[id="login-button"]')
    this.errorMessage = Selector('h3')
  }

  async submitLoginForm(user, password){
    await t
      .typeText(this.usernameField, user, {paste:true})
      .typeText(this.passwordField, password, {paste:true})
      .click(this.btnLogin)
  }
}

export default new LoginPage()
