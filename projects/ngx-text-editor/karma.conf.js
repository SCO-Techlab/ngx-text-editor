const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    client: {
      jasmine: {
        // Puedes añadir configuración de Jasmine aquí
        // random: false
      },
      clearContext: false // mantiene visible la UI de Jasmine
    },

    jasmineHtmlReporter: {
      suppressAll: true // elimina traces duplicados
    },

    coverageReporter: {
      dir: path.join(__dirname, '../../coverage/ngx-text-editor'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ],
      fixWebpackSourcePaths: true
    },

    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],
    singleRun: false,

    restartOnFileChange: true
  });
};
