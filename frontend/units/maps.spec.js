import {test, expect } from 'vitest'
import {names_map} from './src/assets/maps'

test("Names should have (2) properties", () => {
    expect(Object.keys(names_map[0]).length).toBe(2)
})
