module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt);

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
		babel: {
			options: {
				sourceMap: false,
				presets: ['es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'js/dist',
					src: 'script.main.js',
					dest: 'js/dist',
					ext: '.main.es5.js',
					extDot: 'first'
				}]
			}
		},
		watch: {
			script: {
				files: ['js/src/*.js'],
				tasks: ['concat'],
				options: {
						spawn: false,
				},
			},
			babel: {
				files: 'js/dist/script.main.js',
				tasks: ['babel']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
  grunt.registerTask('default', ['concat','babel']);

};