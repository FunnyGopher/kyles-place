module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
		    server: {
				options: {
					port: 8080,
					base: '',
					keepalive: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('run', ['connect:server']);
	grunt.registerTask('default', ['run']);
};