import { expect } from 'chai';
const title = '//h2[@class="projectTitle"]' ;

describe('webdriver.io page', () => {
    it('title should be present',  () => {
            browser.url('https://webdriver.io/') ;
            expect(title).to.be.there();
    });
    it('title should be displayed',  () => {
        browser.url('https://webdriver.io/') ;
        expect(title).to.be.displayed();
    });
    it('should have the right text in h2 element',  () => {
        browser.url('https://webdriver.io/') ;

        expect(title).to.have.text('WEBDRIVER I/O');

    });
    it('should have the search input enabled',  () => {
        browser.url('https://webdriver.io/') ;

        expect("//input[@id='search_input_react']").to.be.enabled();

    });
});
