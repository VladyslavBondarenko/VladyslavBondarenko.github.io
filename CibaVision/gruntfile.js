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
		sass: {
			files: ['css/*.scss'],
			tasks: ['sass'],
		},
		scripts: {
				files: ['js/src/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
						spawn: false,
				},
		}
	},
	sass: {
		dist: {
			files: [{
				expand: true,
				cwd: 'css',
				src: ['*.scss'],
				dest: 'css',
				ext: '.css'
			}]
		}    
	}
  });

    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	
    grunt.registerTask('default', ['concat','uglify','imagemin','sass']);

};