module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        //Read the package.json (optional)
        pkg: grunt.file.readJSON('package.json'),

         watch: {
            scss: {
                files: 'scss/**/*.scss',
                tasks: ['sass']
            }
        },
        // Task configuration.
        sass: {
            dist: {
                files: {
                    'css/style.css': 'scss/main.scss',
                },
                options: {
                    sourcemap: 'true'
                }
            }
        },
         browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        'html/*.html',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    // Default task.
    grunt.registerTask('default', ['browserSync','watch']);
};