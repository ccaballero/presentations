'use strict';

// borrowed from Angular generator
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {

  // load grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      options: {
        hostname: 'localhost',
        port: 9000,
        base: 'presentation'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, 'presentation')
            ];
          }
        }
      },
    },
    watch: {
      mdpress: {
        files: [
          'presentation.md',
          'themes/{,*/}*.html',
          'themes/{,*/}*.css'
        ],
        tasks: ['shell:compile']
      },
      livereload: {
        files: [
          'presentation/index.html',
          'presentation/css/{,*/}*.css'
        ],
        tasks: ['livereload']
      }
    },
    shell: {
      compile: {
        command : 'mdpress presentation.md -s mytheme'
      }
    }
  });

  // For livereload
  grunt.renameTask('regarde', 'watch');
  grunt.registerTask('compile', ['shell:compile']);
  grunt.registerTask('default', ['compile']);
  grunt.registerTask('serve', [
    'shell:compile',
    'livereload-start',
    'connect:livereload',
    'watch',
  ]);

};
