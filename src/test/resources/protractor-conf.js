exports.config = {
		

  seleniumAddress: 'http://localhost:4444/wd/hub',
		
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  
  
  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};