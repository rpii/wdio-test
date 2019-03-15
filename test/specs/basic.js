const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const elem = $('.tagline');
        elem.waitForExist(3000).then( () => {
            const title = browser.getTitle();
            assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
        });
    });
});
