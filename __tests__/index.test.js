import test from 'node:test';
import assert from 'assert/strict';
import * as funcs from '../index.js';

test('step1', () => {
    assert.strictEqual(funcs.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    assert.strictEqual(funcs.highAndLow("1 2 3"), "3 1");
});

test('step2', () => {
    assert.strictEqual(funcs.squareDigits(3212), 9414);
    assert.strictEqual(funcs.squareDigits(2112), 4114);
    assert.strictEqual(funcs.squareDigits(0), 0);
});
test('step3', () => {
    assert.strictEqual(funcs.descendingOrder(0), 0)
    assert.strictEqual(funcs.descendingOrder(1), 1)
    assert.strictEqual(funcs.descendingOrder(111), 111)
    assert.strictEqual(funcs.descendingOrder(15), 51)
    assert.strictEqual(funcs.descendingOrder(1021), 2110)
    assert.strictEqual(funcs.descendingOrder(123456789), 987654321)
});
test('step4', () => {
    assert.strictEqual(funcs.humanReadable(0), '00:00:00')
    assert.strictEqual(funcs.humanReadable(59), '00:00:59')
    assert.strictEqual(funcs.humanReadable(60), '00:01:00')
    assert.strictEqual(funcs.humanReadable(90), '00:01:30')
    assert.strictEqual(funcs.humanReadable(3599), '00:59:59')
    assert.strictEqual(funcs.humanReadable(3600), '01:00:00')
    assert.strictEqual(funcs.humanReadable(45296), '12:34:56')
    assert.strictEqual(funcs.humanReadable(86399), '23:59:59')
    assert.strictEqual(funcs.humanReadable(86400), '24:00:00')
    assert.strictEqual(funcs.humanReadable(359999), '99:59:59')
});
test('step5', () => {
    assert.strictEqual(funcs.accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
    assert.strictEqual(funcs.accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
    assert.strictEqual(funcs.accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
    assert.strictEqual(funcs.accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
    assert.strictEqual(funcs.accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");

});
