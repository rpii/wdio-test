exports.config = Object.assign({}, require('./base.conf').config, {
  capabilities: [
    {
      // geckodriver supports no parallel sessions:
      maxInstances: 1,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['-headless', '--window-size=1440,900']
      }
    }
  ],
    services      : ['firefox-profile', 'selenium-standalone'],
    firefoxProfile: {
        'browser.startup.homepage': 'https://webdriver.io'
    },
    videos        : {
        enabled   : false,
        resolution: '1440x900'
    }
});
