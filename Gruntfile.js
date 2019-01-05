module.exports = grunt => {
  const sass = require('node-sass');
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        
        files: {
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
      
    },
    watch: {
      css:{
        files: ['**/*.scss'],
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
};