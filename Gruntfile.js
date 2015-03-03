module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', function() {

		var sourceFiles = [
			'src/intro.js',
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
			'src/net/Resource.js',
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
				default: {
					src: sourceFiles,
					dest: 'dist/go2d-debug.js'
				}
			},
			uglify: {
				options: {
					// sourceMap: true,
					banner: '/*! <%= pkg.name %> <%= pkg.version %> | <%= pkg.description %>*/\n'
				},
				default: {
					files: {
						'dist/go2d.js': 'dist/go2d-debug.js'
					}
				}
			},
			replace: {
				default: {
					overwrite: true,
					src: ['dist/go2d.js', 'dist/go2d-debug.js'],
					replacements: [{
						from: '@VERSION',
						to: '<%= pkg.version %>'
					}]
				}
			}
		});

		grunt.task.run(['concat', 'uglify', 'replace']);
	});
};