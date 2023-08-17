import { Client } from '../../src/assets/classes';
import { test, expect } from 'vitest'

test("Class has (2) properties", () => {
    expect(Client.getPropertyNames().length()).toBe(2)
})