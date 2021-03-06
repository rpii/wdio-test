exports.config = Object.assign({}, require('./base.conf').config, {
    // hostname    : 'geckodriver',
    capabilities: [
        {
            // geckodriver supports no parallel sessions:
            maxInstances: 1,
            browserName: 'firefox',
            marionette: true,
            'moz:firefoxOptions': {
                args: ['--window-size=1440,900']
            }
        }
    ],

    services: ['selenium-standalone', 'firefox-profile'],
    firefoxProfile: {
        'browser.startup.homepage': 'https://webdriver.io'
    },
    videos: {
        enabled: false,
        resolution: '1440x900'
    }
});
