module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        express: {
            all: {
                options: {
                    port: 8000,
                    hostname: "*",
                    bases: ['dist/'],
                    keepalive: true,
                    livereload: true
                }
            }
        },

        watch: {
            html: {
                files: ['dev/*.html'],
                tasks: ['htmlmin']
            },
            css: {
                files: ['dev/sass/*.scss', 'dev/sass/**/*.scss'],
                tasks: ['style']
            },
            js : {
                files: ['dev/js/*.js', 'dev/js/**/*.js'],
                tasks: ['js']
            },
            options: {
                livereload: true
            }
        },

        open: {
            all: {
                path: 'http://localhost:<%= express.all.options.port%>'
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dist/index.html': 'dev/index.html'
                }
            }
        },
        compass: {
            dev: {
                options: {
                    sassDir: ['dev/sass'],
                    cssDir: ['dev/css'],
                    environment: 'dev'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dev/css',
                    src: ['main.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },

        browserify: {
            dist: {
                options: {
                    transform: [['babelify', { presets: ["es2015", "react", 'stage-1'] }]]
                },
                files: {
                    'dist/js/bundle.min.js': 'dev/js/app.js'
                    //'server/public/app.js': 'server/client/app.js'
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/chatReducer.js', 'src/js/app.js'],
                dest: 'dist/bundle.js'
            }
        },

        uglify: {
            dist: {
                src: ['dev/js/bundel.js'],
                dest: 'dist/js/bundle.min.js'
            }
        }
    });

    grunt.registerTask('server', ['express', 'open']);
    grunt.registerTask('style', ['compass', 'cssmin']);
    grunt.registerTask('js', ['browserify']);
    grunt.registerTask('build', ['htmlmin', 'style', 'js']);

    grunt.registerTask('default', ['build', 'server', 'watch']);
};