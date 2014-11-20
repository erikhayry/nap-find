'use strict';

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        dist: './dist',
        app: './app',
        assets: './assets'
    };

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        env: grunt.file.readJSON('env.json'),
        f11: appConfig,
        concurrent: {
            tasks: ['nodemon:dev', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    args: [],
                    ignoredFiles: [],
                    ext: 'js, hbs',
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    cwd: __dirname
                }
            },
            production: {
                script: 'app.js',
                options: {
                    args: [],
                    nodeArgs: ['--debug'],
                    delayTime: 1,
                    cwd: __dirname
                }
            }
        },

        less: {
            compileCore: {
                options: {
                    strictMath: true,
                    sourceMap: true,
                    outputSourceFiles: true,
                    sourceMapURL: 'style.css.map',
                    sourceMapFilename: '<%= f11.assets %>/generated/css/style.css.map'
                },
                files: {
                    '<%= f11.assets %>/generated/css/style.css': '<%= f11.assets %>/styles/style.less'
                }
            }
        },

        csscomb: {
            options: {
                config: '<%= f11.assets %>/styles/.csscomb.json'
            },
            style: {
                expand: true,
                cwd: '<%= f11.assets %>/styles/',
                src: ['*.less', '!*.min.css'],
                dest: '<%= f11.assets %>/styles/'
            },
            views: {
                expand: true,
                cwd: '<%= f11.app %>/views/',
                src: ['**/*.less', '!*.min.css'],
                dest: '<%= f11.app %>/views/'
            }
        },

        watch: {
            configFiles: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true,
                    spawn: true
                }
            },
            less: {
                files: ['**/*.less', '!**/*.tmplt.less'],
                tasks: ['csscomb', 'less'],
                options: {
                    livereload: true
                }
            },
            assetsJs: {
                files: ['<%= f11.assets %>/scripts/*.js', '!**/*.tmplt.js'],
                options: {
                    livereload: true
                }
            },
            tmpltLess: {
                files: ['**/*.tmplt.less', "globals/**/*.json"],
                tasks: ['tmplt']
            },
            tmpltJs: {
                files: ['<%= f11.assets %>/**/*.tmplt.js', "globals/**/*.json"],
                tasks: ['js']
            },
            partialScripts: {
                files: ['<%= f11.app %>/views/partials/**/*.js'],
                tasks: ['js']
            },
            templates: {
                files: ['<%= f11.app %>/**/*.hbs'],
                options: {
                  livereload: true
                }
            }
        },       

        tmplt: {
            colour: {
                options: {
                    tmpltsrc: "./globals/f11Colours.json"
                },
                src: ['!components/**/*', '**/*.less', '<%= f11.assets %>/scripts/partials/**/*.js']
            }
        },

        copy: {
            partialScripts: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['<%= f11.app %>/views/partials/**/*.js', '!app/views/partials/**/*.tmplt.js'],
                    dest: '<%= f11.assets %>/scripts/partials/'
                }]
            },

            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= f11.app %>',
                    dest: '<%= f11.dist %>/app',
                    src: [
                        '**/*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: './',
                    dest: '<%= f11.dist %>',
                    src: [
                        'config/**/*'
                    ]
                }]
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= f11.dist %>/{,*/}*'
                    ]
                }]
            },
            js: ["<%= f11.assets %>/scripts/partials/**/*tmplt.js"]
        },

        useminPrepare: {
            html: '<%= f11.app %>/views/partials/**/*.hbs',
            options: {
                root: '<%= f11.assets %>',
                dest: '<%= f11.dist %>/assets/'
            }

        },

        uglify: {
            partials: {
                files: [{
                    expand: true,
                    src: '<%= f11.assets %>/scripts/partials/**/*.js'
                }]
            }

        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= f11.dist %>/app/views/partials/**/*.hbs'],
            options: {
                assetsDirs: ['<%= f11.dist %>']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-tmplt');
    grunt.loadNpmTasks('grunt-reload');

    //build dist
    grunt.registerTask('build', [
        'clean:dist',
        'tmplt',
        'less',
        'useminPrepare',
        'concat',
        'uglify',
        'cssmin',
        'copy:dist',
        'uglify',
        'usemin'
    ]);

    //build js
    grunt.registerTask('js', [
        'copy:partialScripts',
        'tmplt',
        'uglify',
        'clean:js'
    ]);

    grunt.registerTask('default', ['env:dev', 'js', 'less', 'concurrent']);
    grunt.registerTask('prod', ['env:production', 'build', 'nodemon:production']);

};