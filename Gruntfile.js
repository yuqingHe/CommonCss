module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),


        // Task configuration.
        sass: {
            dist: {
                files: {
                    'css/style.css': 'css/style.scss',
                    'css/common.css': 'css/common.scss'
                },
                options: {
                    sourcemap: 'true'
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-sass');

    // Default task.
    grunt.registerTask('default', ['sass']);
};