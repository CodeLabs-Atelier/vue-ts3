import {test, expect } from 'vitest'
import {add} from './src/assets/functions'

test("Function Adds Positive Numbers", () =>{
    expect(add(1,1)).toBe(2)
})

test("Function Adds Negative Numbers", () =>{
    expect(add(-1,-1)).toBe(-2)
})