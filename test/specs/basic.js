const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io');
        const title = $('//title');
        browser.waitUntil(() => {
            return browser.getTitle() === 'WebdriverIO · Next-gen WebDriver test framework for Node.js'
        }, 5000, 'expected title to be present');
    });
});
