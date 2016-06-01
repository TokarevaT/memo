module.exports = function(grunt) {

  grunt.initConfig({
	  
		concat: {
	  options: {
		separator: ' \r\n'
	  },
	  
	  dist: {
		src: ['js/src/*.js'],
		dest: 'js/dist/script.main.js'
	  },
	  
	  dist: {
		src: ['css/src/*.css'],
		dest: 'css/dist/main.css'
	  },
	  dist: {
		src: ['styles/variables.scss', 
			'styles/mixins.scss',
			'styles/reset.scss',
			'styles/style.scss'],
		dest: 'styles/main.scss'
	  },
	},

	uglify:{
		dist: {
		src: ['js/dist/script.main.js'],
		dest: 'js/dist/script.main.min.js'
	  } 
	},

		cssmin: {
		  options: {
			separator: ''
		  },
		  
		  dist: {
			src: ['css/src/*.css'],
			dest: 'css/dist/main.min.css'
		  }
		},
		 sass: {                              
			dist: {                            
				files:[{
					expand: true,
					cwd: 'styles',
					src: ['*main.scss'],
					dest: 'styles',
					ext: '.css'
					}],	
				}
		},
		watch: {
				sass: {
					files: ['styles/*.scss'],
					tasks: ['concat','sass'],
					}
		}
  });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['concat','uglify','cssmin','sass']);
};

