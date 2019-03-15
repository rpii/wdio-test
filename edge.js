exports.config = Object.assign({}, require('./base.conf').config, {
  hostname: process.env.WINDOWS_HOST ,
  capabilities: [
    {
      // MicrosoftWebDriver supports no parallel sessions:
      maxInstances: 1,
      browserName: 'MicrosoftEdge'
    }
  ],
  videos: {
    enabled: false
  }
});
