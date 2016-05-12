module.exports = function(grunt) {

  grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['js/src/*.js'],
				dest: 'js/dist/script.main.js'
			}
		},
		uglify: {
			dist: {
				src: ['js/dist/script.main.js'],
				dest: 'js/dist/script.main.min.js'
			}
		},
		imagemin: {
			dynamic: {
					files: [{
							expand: true,
							cwd: 'images/',
							src: ['**/*.{png,jpg,gif}'],
							dest: 'images/build/'
					}]
			}
		},
		watch: {
			scripts: {
					files: ['js/*.js'],
					tasks: ['concat', 'uglify'],
					options: {
							spawn: false,
					},
			}
		}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
  grunt.registerTask('default', ['concat','uglify','imagemin']);

};