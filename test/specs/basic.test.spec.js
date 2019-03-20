import { expect } from 'chai';

describe('webdriver.io page', () => {
    it('should have the right title',  () => {
            browser.url('https://webdriver.io/') ;
            const title = $('//h2[@class="projectTitle"]') ;
            // title.waitForVisible(3000) ;
            expect(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js').to.be.displayed();
    });
});
