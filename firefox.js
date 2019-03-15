exports.config = Object.assign({}, require('./base.conf').config, {
  hostname: 'geckodriver',
  capabilities: [
    {
      // geckodriver supports no parallel sessions:
      maxInstances: 1,
      browserName: 'firefox',
      'moz:firefoxOptions': {
        args: ['--window-size=1440,900']
      }
    }
  ],
  videos: {
    enabled: true,
    resolution: '1440x900'
  }
});
