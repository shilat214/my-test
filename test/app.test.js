import test from 'node:test';
import assert from 'node:assert/strict';

import { getMessage, createApp } from '../src/app.js';

test('getMessage returns the default greeting', () => {
  assert.equal(getMessage(), 'Hello from my-test!');
});

test('createApp responds with the greeting on GET /', async () => {
  const app = createApp();
  const response = await app.request('http://localhost/');

  assert.equal(response.statusCode, 200);
  assert.match(await response.text(), /Hello from my-test!/);
});
