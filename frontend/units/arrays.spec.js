import {arr0, arr1, arr2, } from './src/assets/arrays';
import {test, expect, } from 'vitest';


test('Test: arr0.length() == 0', () =>{
    expect(arr0.length).toBe(0);
});

test('Test: arr1.length() == 1', () =>{
    expect(arr1.length).toBe(1);
});

test('Test: arr2.length() == 2', () =>{
    expect(arr2.length).toBe(2);
});