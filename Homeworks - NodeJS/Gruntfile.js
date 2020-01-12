// Gruntfile.js

// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "dist/index.js": "src/index.js",
                    "dist/User.js": "src/User.js",
                    "dist/Worker.js": "src/Worker.js"
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'dist/index.min.js': ['dist/index.js'],
                    'dist/User.min.js': ['dist/User.js'],
                    'dist/Worker.min.js': ['dist/Worker.js'],
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['babel']);

};