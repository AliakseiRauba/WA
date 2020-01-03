// Gruntfile.js

// Вся конфигурация находится внутри этой функции
module.exports = function (grunt) {

    // ===========================================================================
    // Конфигурация GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        jshint: {
            options: {
                esversion: 6,
                reporter: require('jshint-stylish') // используем jshint-stylish для вывода стилизованного отчета об ошибках
            },

            // здесь мы указываем файлы, которые необходимо проверить
            // после запуска задачи будет проверен Gruntfile.js и все файлы с расширением .js в папке src
            build: ['Gruntfile.js', 'src/**/*.js']
        }



    });
    // ============= // Создаем задачи ========== //
    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'less']);


    // ===========================================================================
    // Загружаем модули GRUNT ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

};