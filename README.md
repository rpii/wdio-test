# wdio-test

A test project for evaluating the webdriverio platform



## Configuration
To run the test you need to create a symlink in the config folder to what you are trying to run.
for now, mklink wdio.conf.js chrome.conf.js will show the issue in chrome.

I am using the newly updated chai-webdriverio assertions library v 1.0.0.

the code at line of basic.test.spec.js:
...
            expect(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js').to.be.displayed();

causes an error to be thrown deep into the hook callbacks.

This is the stack you see, but there is another exception stack that gets covered up

Error: selector needs to be typeof `string` or `function`
    at Object.<anonymous> (C:\Users\rpeter\Development\automated-test\wdio-test\node_modules\@wdio\runner\node_modules\webdriverio\build\utils.js:39:32)
    at Module._compile (internal/modules/cjs/loader.js:738:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:749:10)
    at Module.load (internal/modules/cjs/loader.js:630:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:570:12)
    at Function.Module._load (internal/modules/cjs/loader.js:562:3)
    at Module.require (internal/modules/cjs/loader.js:667:17)
    at require (internal/modules/cjs/helpers.js:20:18)
    at Object.<anonymous> (C:\Users\rpeter\Development\automated-test\wdio-test\node_modules\@wdio\runner\node_modules\webdriverio\build\multiremote.js:16:14)
    at Browser.runCommand (C:\Users\rpeter\Development\automated-test\wdio-test\node_modules\@wdio\sync\build\wrapCommand.js:31:24)
    at Browser.<anonymous> (C:\Users\rpeter\Development\automated-test\wdio-test\node_modules\@wdio\sync\build\wrapCommand.js:53:31)
    at isOneElementDisplayed (C:\Users\rpeter\Development\automated-test\wdio-test\node_modules\chai-webdriverio\dist\assertions\displayed.js:15:27)
    at Browser.<anonymous> (C:\Users\rpeter\Development\automated-test\wdio-test\node_modules\chai-webdriverio\dist\assertions\displayed.js:36:24)
    at C:\Users\rpeter\Development\automated-test\wdio-test\node_modules\@wdio\sync\build\runFnInFiberContext.js:20:25
    
    it starts from client$$(selector) in the code below:
    
    var isOneElementDisplayed = function isOneElementDisplayed(client, selector) {
        var elements = client.$$(selector);
        var filteredList = elements.filter(function (element) {
            return element.isDisplayed();
        });
    
        return filteredList.length > 0;
    };
...

Anyone have any ideas?
