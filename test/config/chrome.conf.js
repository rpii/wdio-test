exports.config = Object.assign({}, require('./base.conf').config, {
    path        : '/',
    capabilities: [
        {
            // Set maxInstances to 1 if screen recordings are enabled:
            // maxInstances: 1,
            browserName  : 'chrome',
            chromeOptions: {
                args: ['--window-size=1440,900']
            }
        }
    ],

    port        : 9515, // default for ChromeDriver

    services    : ['chromedriver'],
    chromeDriverLogs: './logs'
});
