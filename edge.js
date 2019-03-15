const path = require('path') ;
const edgePath = path.join(__dirname, './node_modules/selenium-standalone/.selenium/edgedriver/MicrosoftWebDriver.exe');

exports.config = Object.assign({}, require('./base.conf').config, {
    capabilities: [
        {
            // MicrosoftWebDriver supports no parallel sessions:
            maxInstances: 1,
            browserName : 'MicrosoftEdge'
        }
    ],
    services    : ['selenium-standalone'],
    seleniumArgs: {
        javaArgs: [
            '-Dwebdriver.edge.driver=' + edgePath
        ]
    },
    videos      : {
        enabled: false
    }
});
