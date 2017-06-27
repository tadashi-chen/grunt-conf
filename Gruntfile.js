module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    './assets/css/test.css': './assets/css/test.scss'
                }
            }
        },
        watch: {
            css: {
                files: [
                    './assets/css/test.scss'
                ],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },
        uglify: {
            options: {
                banner: '/*! File version: <%= grunt.template.date("yyyy-mm-dd hh:MM:ss") %> */\n'//添加banner
            },
            release: {
                files: {
                    './assets/js/main.min.js': ['./assets/js/a.js', './assets/js/b.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["watch"]);
}
