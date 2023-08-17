import {arr0, arr1, } from '../../src/assets/arrays';
import {test, expect, } from 'vitest';


test('Test: Len(arr0) == 0', () =>{
    expect(Len(arr0)).toBe(0);
});

test('Test: Len(arr1) == 1', () =>{
    expect(Len(arr1)).toBe(1);
});
