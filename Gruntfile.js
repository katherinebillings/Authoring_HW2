module.exports = function(grunt) {
    grunt.initConfig({
      pkg : grunt.file.readJSON('package.json'),
  
      concat : {
        //configure the concat task
        dist: {
          src: [
            'js/modules/*.js',
            'js/main.js'
          ],
          dest: 'prod/production.js'
        }
      },
  
      uglify : {
        build : {
          src : 'prod/production.js',
          dest : 'prod/production.min.js'
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['concat', 'uglify']);
  };
  