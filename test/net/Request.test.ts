import * as playable from '../../src/';
import {assert} from 'vitest';

describe('Request', () => {

	it('.status', () => new Promise<void>(resolve => {
		let req = new playable.Request({
			url: '/test/fixtures/data.json',
			responseType: 'json',
			data: {test: true}
		});
		req.on(playable.Event.LOAD, e => {
			assert.strictEqual(req.status, 200);
			assert.strictEqual(e.data['msg'], 'ok');
			resolve();
		});
	}));

	it('.response', () => new Promise<void>(resolve => {
		let req = new playable.Request({
			url: '/test/fixtures/data.json',
			responseType: 'json',
			method: 'post',
			data: {test: true},
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			}
		});
		req.on(playable.Event.LOAD, () => {
			assert.strictEqual(req.response['msg'], 'ok');
			resolve();
		});
	}));

	it('.responseHeaders', () => new Promise<void>(resolve => {
		let req = new playable.Request({
			url: '/test/fixtures/data.json',
			responseType: 'json'
		});
		req.on(playable.Event.LOAD, () => {
			assert.isOk(req.responseHeaders);
			resolve();
		});
	}));

	it('.abort(): void', () => new Promise<void>(resolve => {
		let req = new playable.Request({
			url: '/test/fixtures/data.json',
			method: 'post',
			responseType: 'json',
			data: {test: true},
			headers: {
				'accept': 'application/json',
				'content-type': 'application/json'
			}
		});
		req.on(playable.Event.ABORT, () => {
			resolve();
		});
		req.abort();
	}));

});
