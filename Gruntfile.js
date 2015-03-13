module.exports = function(grunt) {

	var sourceFiles = [
		'src/intro.js',
		'src/go2d.js',
		'src/util/lang.js',
		'src/core/Class.js',
		'src/math/vector.js',
		'src/math/matrix.js',
		'src/event/EventEmitter.js',
		'src/event/Event.js',
		'src/event/TouchEvent.js',
		'src/event/ResizeEvent.js',
		'src/system/ObjectPool.js',
		'src/system/Director.js',
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
		yuidoc: {
			dist: {
				name: '<%= pkg.name %>',
				description: '<%= pkg.description %>',
				version: '<%= pkg.version %>',
				url: '<%= pkg.homepage %>',
				options: {
					paths: 'src',
					outdir: 'docs'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');

	grunt.registerTask('dist', ['concat', 'uglify', 'replace']);
	grunt.registerTask('doc', ['yuidoc']);
	grunt.registerTask('default', ['dist', 'doc']);
};
