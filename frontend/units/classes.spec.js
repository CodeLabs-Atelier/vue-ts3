import { Client, getPropertyNames } from './src/assets/classes';
import { test, expect } from 'vitest'

test("Class has (2) properties", () => {
    let c = new Client('Name', 0);
    expect(c.getPropertyNames().length).toBe(2)
})