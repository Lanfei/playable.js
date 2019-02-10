import * as playable from '../../src/';
import {assert} from 'chai';

describe('Request', () => {

	it('.status', done => {
		let req = new playable.Request({
			url: '/base/test/fixtures/data.json',
			responseType: 'json',
			data: {test: true}
		});
		req.on(playable.Event.LOAD, e => {
			assert.strictEqual(req.status, 200);
			assert.strictEqual(e.data['msg'], 'ok');
			done();
		});
	});

	it('.response', done => {
		let req = new playable.Request({
			url: '/base/test/fixtures/data.json',
			responseType: 'json',
			method: 'post',
			data: {test: true},
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		});
		req.on(playable.Event.LOAD, () => {
			assert.strictEqual(req.response['msg'], 'ok');
			done();
		});
	});

	it('.responseHeaders', done => {
		let req = new playable.Request({
			url: '/base/test/fixtures/data.json',
			responseType: 'json'
		});
		req.on(playable.Event.LOAD, () => {
			assert.isOk(req.responseHeaders);
			done();
		});
	});

	it('.abort(): void', done => {
		let req = new playable.Request({
			url: '/base/test/fixtures/data.json',
			method: 'post',
			responseType: 'json',
			data: {test: true},
			headers: {
				'accept': 'application/json',
				'content-type': 'application/json'
			}
		});
		req.on(playable.Event.ABORT, () => {
			done();
		});
		req.abort();
	});

});
