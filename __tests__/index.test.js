import test from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
    assert.strictEqual(funcs.one('060006'), 1);
});

test('step2', () => {
    assert.strictEqual(funcs.two('060006'), 2);
});