module.exports = function(config){
  config.set({

    basePath : '../../',

    files : [
      'main/resources/static/lib/angular/angular.js',
      //'app/bower_components/angular-route/angular-route.js',
      'main/resources/static/lib/angular-mocks/angular-mocks.js',
      'main/resources/static/js/**/*.js',
      'test/resources/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};