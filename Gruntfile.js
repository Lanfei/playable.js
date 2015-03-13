module.exports = function(grunt) {

	var sourceFiles = [
		'src/intro.js',
		'src/go2d.js',
		'src/util/lang.js',
		'src/core/Class.js',
		'src/core/ObjectPool.js',
		'src/core/Director.js',
		'src/math/vector.js',
		'src/math/matrix.js',
		'src/event/EventDispatcher.js',
		'src/event/Event.js',
		'src/event/TouchEvent.js',
		'src/event/ResizeEvent.js',
		'src/net/URLRequest.js',
		'src/net/ResourceLoader.js',
		'src/tween/Ease.js',
		'src/tween/Tween.js',
		'src/display/DisplayObject.js',
		'src/display/Sprite.js',
		'src/display/ImageView.js',
		'src/display/ScrollView.js',
		'src/display/TextField.js',
		'src/display/Stage.js',
		'src/outro.js'
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				src: sourceFiles,
				dest: 'dist/go2d.js'
			}
		},
		uglify: {
			dist: {
				options: {
					// sourceMap: true,
					banner: '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.description %> */\n'
				},
				files: {
					'dist/go2d.min.js': 'dist/go2d.js'
				}
			}
		},
		replace: {
			dist: {
				overwrite: true,
				src: ['dist/go2d.min.js', 'dist/go2d.js'],
				replacements: [{
					from: '@VERSION',
					to: '<%= pkg.version %>'
				}]
			}
		},
		jsdoc: {
			dist: {
				// options: {
				// 	template: 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template'
				// },
				src: ['README.md', 'src/go2d.js', 'src/*/*.js'],
				dest: 'docs'
			}
		},
		jsdoc2md: {
			dist: {
				src: ['src/go2d.js', 'src/*/*.js'],
				dest: 'docs/api.md'
			}
		}
	});

	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('dist', ['concat', 'uglify', 'replace']);
	grunt.registerTask('doc', ['jsdoc', 'jsdoc2md']);
	grunt.registerTask('default', ['dist', 'doc']);
};
