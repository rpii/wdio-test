exports.config = Object.assign({}, require('./base.conf').config, {
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
