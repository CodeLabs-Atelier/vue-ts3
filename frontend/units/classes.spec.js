import { Client } from './src/assets/classes';
import { test, expect } from 'vitest';

test("Class has (2) properties", () => {
    let c = new Client('Name', 1);
    expect(c.getPropertyNames().length).toBe(2)
});

test("Name is a string", () => {
    let c = new Client('Name', 1);
    let name = c.getName();

    expect(typeof name === 'string').toBe(true)
})

test("Age is a number", () => {
    let c = new Client('Name', 1);
    let age = c.getAge();

    expect(typeof age === 'number').toBe(true)
})

test("Age is greater than 0", () => {
    let c = new Client('Name', 1);
    let age = c.getAge();

    expect(age > 0).toBe(true)
})