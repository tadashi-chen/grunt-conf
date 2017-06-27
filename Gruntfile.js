module.exports = function(grunt) {

    grunt.initConfig({
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
            },
            // copy: {
            //     files: [
            //         './assets/**'
            //     ],
            //     tasks: ['copy'],
            //     options: {
            //         spawn: false,
            //     },
            // },
            sync: {
                files: [
                    './assets/**'
                ],
                tasks: ['sync'],
                options: {
                    spawn: false,
                },
            }
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    // { expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile' },

                    // includes files within path and its sub-directories
                    { expand: true, cwd: './assets/', src: ['**'], dest: './dest/', filter: 'isFile' },

                    // makes all src relative to cwd
                    // { expand: true, cwd: 'path/', src: ['**'], dest: 'dest/' },

                    // flattens results to a single level
                    // { expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile' },
                ],
            },
        },
        sync: {
            main: {
                files: [{
                    cwd: './assets/',
                    src: [
                        '**', /* Include everything */
                        // '!**/*.txt' /* but exclude txt files */
                    ],
                    dest: './dest/',
                }],
                pretend: false, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much. 
                verbose: true // Display log messages when copying files 
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sync');

    grunt.registerTask("default", ["watch:copy"]);
}
