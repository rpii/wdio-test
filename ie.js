exports.config = Object.assign({}, require('./base.conf').config, {
  port: 4445,
  capabilities: [
    {
      // IEDriverServer supports no parallel sessions:
      maxInstances: 1,
      browserName: 'internet explorer'
    }
  ],
  videos: {
    enabled: false
  }
});
