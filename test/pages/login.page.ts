import Page from 'base.page';

class LoginPage extends Page {

    /**
     * define elements
     */

    get usernameInput()   { return $('//*[@name="username"]'); }
    get passwordInput()   { return $('//*[@name="password"]'); }
    get rememberMe ()     { return $('//*[@id="remember-me"]'); }
    get loginButton()     { return $('//button[contains(., "Login")]'); }
    get footerImage()     { return $('//*[@class="pull-right brand img-responsive"]'); }

    /**
     * define or overwrite page methods
     */
    navigateTo (browser) {
        super.navigateTo(browser,'login')       //this will append `login` to the baseUrl to form complete URL
    }
    /**
     * your page specific methods
     */

    waitForloginPageToLoad () {
        if(!this.footerImage.isDisplayed()){
            this.footerImage.waitForDisplayed(5000);
        }
    }

    login (browser, username, password) {
        this.waitForloginPageToLoad();
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.rememberMe.click();
        this.loginButton.click();
    }
}

export default new LoginPage()


