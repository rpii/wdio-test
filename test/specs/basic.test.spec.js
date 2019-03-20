import { expect } from 'chai';

describe('webdriver.io page', () => {
    it('title should be present',  () => {
            browser.url('https://webdriver.io/') ;
            const title = $('//h2[@class="projectTitle"]') ;
            expect(title).to.be.there();
    });
    it('title should be displayed',  () => {
        browser.url('https://webdriver.io/') ;
        const title = $('//h2[@class="projectTitle"]') ;
        expect(title).to.be.displayed();
    });
    it('should have the right title',  () => {
        browser.url('https://webdriver.io/') ;
        const title = $('//h2[@class="projectTitle"]') ;
        expect(title).to.have.text('WebdriverIO · Next-gen WebDriver test framework for Node.js');

    });
});
