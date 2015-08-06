var path = require('path');

module.exports = function (grunt) {

    grunt.initConfig({

        clean: {
            dev: [
                '.tmp/public'
            ]
        },

        sass: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/app',
                        src: ['*.scss'],
                        dest: '.tmp/public/styles/',
                        ext: '.css'
                    }
                ]
            }
        },

        reactTemplates: {
            src: ['src/app/**/*.rt']
        },

        copy: {
            dev: {
                files: [
                {
                    expand: true,
                    cwd: './src',
                    src: [
                        '**/*.!(scss|sass|jsx|rt)'
                    ],
                    dest: '.tmp/public'
                }
                ]
            }
        },

        connect: {
            dev: {
                options: {
                    port: 2345,
                    //keepalive: true,
                    base: '.tmp/public',
                    open: true
                }
            }
        },

        watch: {
            src: {
                files: ['src/**/*'],
                tasks: ['watch-handler']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react-templates');

    grunt.registerTask('default', ['dist']);
    grunt.registerTask('watch-handler', ['dist']);
    grunt.registerTask('dist', ['sass', 'rt', 'copy']);
    grunt.registerTask('rt', ['react-templates']);
    grunt.registerTask('serve', [
        'clean',
        'dist',
        'connect:dev',
        'watch'
    ]);


};
