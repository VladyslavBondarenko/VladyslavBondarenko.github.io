module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt);

  grunt.initConfig({
		babel: {
			options: {
				sourceMap: false,
				presets: ['es2015']
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'js/src',
					src: 'script.js',
					dest: 'js/dist',
					ext: '.es5.js',
					extDot: 'first'
				}]
			}
		},
	});

	grunt.registerTask('default', ['babel']);

};