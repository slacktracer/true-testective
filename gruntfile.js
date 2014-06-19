module.exports = function (grunt) {
  'use strict';
  grunt.loadNpmTasks('grunt-jslint'); // load the task
  grunt.initConfig({
    jslint: { // configure the task
      // lint your project's server code
      server: {
        src: [ // some example files
          '*.js',
          'server/lib/*.js',
          'server/routes/*.js',
          'server/*.js',
          'server/test/*.js'
        ],
        exclude: [
          'gruntfile.js',
          'server/config.js'
        ],
        directives: { // example directives
          node: true,
          todo: true
        },
        options: {
          edition: 'latest', // specify an edition of jslint or use 'dir/mycustom-jslint.js' for own path
          junit: 'out/server-junit.xml', // write the output to a JUnit XML
          log: 'out/server-lint.log',
          jslintXml: 'out/server-jslint.xml',
          errorsOnly: true, // only display errors
          failOnError: false, // defaults to true
          checkstyle: 'out/server-checkstyle.xml' // write a checkstyle-XML
        }
      },
      // lint your project's client code
      client: {
        src: [
          'client/**/*.js'
        ],
        directives: {
          browser: true,
          predef: [
            'jQuery'
          ]
        },
        options: {
          junit: 'out/client-junit.xml'
        }
      }
    }
  });
  grunt.registerTask('default', 'jslint');
};
