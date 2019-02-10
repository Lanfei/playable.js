import * as playable from '../../src/';
import {assert} from 'chai';

describe('ResourceManger', () => {
	let stage = new playable.Stage();
	let list = [{
		name: 'text',
		type: playable.ResourceManager.TYPE_TEXT,
		url: '/base/test/fixtures/data.json'
	}, {
		name: 'json',
		type: playable.ResourceManager.TYPE_JSON,
		url: '/base/test/fixtures/data.json'
	}, {
		name: 'image',
		type: playable.ResourceManager.TYPE_TEXTURE,
		url: '/base/test/fixtures/image@1x.jpg'
	}];
	let listWithError = list.concat([{
		name: 'error-media',
		type: playable.ResourceManager.TYPE_TEXTURE,
		url: '/base/test/fixtures/error-media'
	}, {
		name: 'error-request',
		type: playable.ResourceManager.TYPE_BINARY,
		url: '/base/test/fixtures/error-request'
	}]);
	// Sound won't be load when the page is not visible
	let listWithSound = list.concat([{
		name: 'sound',
		type: playable.ResourceManager.TYPE_SOUND,
		url: '/base/test/fixtures/sound.mp3'
	}]);

	it('.total', () => {
		let rm = stage.createResourceManager(listWithSound);
		assert.strictEqual(rm.total, listWithSound.length);
	});

	it('.errorCount', done => {
		let rm = stage.createResourceManager(listWithError);
		rm.on(playable.Event.COMPLETE, () => {
			assert.strictEqual(rm.errorCount, 2);
			done();
		});
	});

	it('.loadedCount', done => {
		let rm = stage.createResourceManager(list);
		rm.on(playable.Event.COMPLETE, () => {
			assert.strictEqual(rm.loadedCount, 3);
			done();
		});
	});

	it('has(name: string): boolean', done => {
		let rm = stage.createResourceManager(listWithError);
		rm.on(playable.Event.COMPLETE, () => {
			assert.isTrue(rm.has('text'));
			assert.isTrue(rm.has('json'));
			assert.isTrue(rm.has('image'));
			assert.isTrue(rm.has('error-media'));
			assert.isTrue(rm.has('error-request'));
			assert.isFalse(rm.has('sound'));
			done();
		});
	});

	it('get<Resource>(name: string): Resource', done => {
		let rm = stage.createResourceManager(listWithError);
		rm.on(playable.Event.COMPLETE, () => {
			assert.isString(rm.get('text'));
			assert.isObject(rm.get('json'));
			assert.instanceOf(rm.get('image'), playable.Texture);
			assert.instanceOf(rm.get('error-media'), playable.Texture);
			assert.instanceOf(rm.get('error-request'), ArrayBuffer);
			assert.notOk(rm.get('sound'));
			done();
		});
	});

});
 