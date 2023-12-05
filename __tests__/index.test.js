import test from 'node:test';
import assert from 'assert/strict';
import * as func from '../index.js';

test('is happy ticket', () => {
    // assert.strictEqual(func.isHappyTicket('060006'), true);
    // assert.strictEqual(func.isHappyTicket('123321'), true);
    // assert.strictEqual(func.isHappyTicket('341800'), true);
    // assert.strictEqual(func.isHappyTicket('812146'), true);
});

test('is not happy ticket', () => {
    // assert.strictEqual(func.isHappyTicket('000001'), false);
    // assert.strictEqual(func.isHappyTicket('123567'), false);
    // assert.strictEqual(func.isHappyTicket('213612'), false);
});