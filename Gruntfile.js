// Gruntfile.js
module.exports=function(grunt) {

// Loading
// One task: grunt.loadNpmTasks('grunt-contrib-jshint');
// Many tasks
[
 'grunt-contrib-jshint',
'grunt-contrib-csslint',
 'grunt-html',
 'grunt-contrib-clean',
 'grunt-execute'
].forEach(function (g) {
	grunt.loadNpmTasks(g);
});

// Configuration
grunt.initConfig({
	jshint: {
		options: {
			curly: true,
			eqeqeq: true
		},
		target1: ['Gruntfile.js','src/js/*.js','!src/**/*.js']
	},
    htmllint:  {
            options: {
                path: false,
                reportpath: false // output to console
            },
            src: [
                'src/*.html', // Include all HTML files in this directory.
                '!src/*.min.html' // Exclude any files ending with `.min.html`
            ]
        },
    csslint:  {
            options: {
           
            },
            src: [
                'src/css/*.css', // Include all HTML files in this directory.
                '!src/css/*.min.css' // Exclude any files ending with `.min.html`
            ]
        },
    clean : {
    	target1 : {
        	src : [ "src/**/*.*~"]
    	}
	}
});

// Default task
grunt.registerTask('default',['clean','jshint','csslint','htmllint']);

};
