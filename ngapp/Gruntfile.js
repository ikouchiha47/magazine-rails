'use strict';
module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      src: ['app/**/*.js'],
      options: {
        eqeqeq: true,
        curly: true,
        laxcomma: true,
        force: true
      }
    },
    connect: {
      proxies: [
        {
          context: '/api/v1',
          host: 'localhost',
          port: 3000
        }
      ],
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729,
        base: './'
      },
      livereload: {
        options: {
          middleware: function(connect, options) {
            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }

            // Setup the proxy
            var middlewares = [];

            // Serve static files.
            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });

            // Make directory browse-able.
            var directory = options.directory || options.base[options.base.length - 1];
            middlewares.push(connect.directory(directory));

            return middlewares;
          }
        }
      }
    },
    watch: {
      options: {
        livereload: '<%= connect.options.livereload %>',
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
          grunt.log.writeln('Waiting for more changes...');
        }
      },
      files: ['Gruntfile.js', 'app/**/*.js', 'app/**/*.css', 'bower_components/**/*.css'],
      tasks: ['jshint']
    }
  });


  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('serve', ['default', 'configureProxies:server', 'connect:livereload', 'watch']);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-connect');
};
