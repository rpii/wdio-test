exports.config = Object.assign({}, require('./base.conf').config, {
        // hostname    : 'chromedriver',
        // hostname: process.env.WINDOWS_HOST ,
        path        : '/',
        capabilities: [
            {
                // Set maxInstances to 1 if screen recordings are enabled:
                // maxInstances: 1,
                browserName  : 'chrome',
                chromeOptions: {
                    // Disable headless mode if screen recordings are enabled:
                    args: ['--window-size=1440,900']
                }
            }
        ],
        // port to find chromedriver
        port: 9515, // default for ChromeDriver
        // ...
        services: ['chromedriver']
    });
