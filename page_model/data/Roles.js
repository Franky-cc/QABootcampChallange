import LoginPage from '../pages/LoginPage'
import { Selector, t, Role } from 'testcafe'
const appUrl = 'https://www.saucedemo.com/'

export const standard_user = Role(appUrl, async t => {
    await login('standard_user', 'secret_sauce')
}, {
        preserveUrl: true
});

export const locked_out_user = Role(appUrl, async t => {
    await login('locked_out_user', 'secret_sauce')
}, {
        preserveUrl: true
});

export const problem_user = Role(appUrl, async t => {
    await login('problem_user', 'secret_sauce')
}, {
        preserveUrl: true
});
export const performance_glitch_user = Role(appUrl, async t => {
    await login('performance_glitch_user', 'secret_sauce')
}, {
        preserveUrl: true
});
export const invalid_user = Role(appUrl, async t => {
    await login('USERNAME1', 'password')
}, {
        preserveUrl: true
});


async function login(userName, password) {
    await LoginPage.submitLoginForm(userName, password)
};
