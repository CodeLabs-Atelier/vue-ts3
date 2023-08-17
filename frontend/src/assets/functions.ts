import axios from 'axios';

// When you begin to export objects out of a JS/TS file it becomes a Module

// You can export simple variables
export let sum: number = 42;
export let bool: boolean = true;
export let str: string = "Hello World";

// You can export functions
export let add = (a: number, b: number) => a + b;
export let sub = (a: number, b: number) => a - b;
export let mul = (a: number, b: number) => a * b;
export let ran = () => Math.floor(Math.random() + 100)

// Promises: From Basic to Advanced
// Basic: Axios Promises
// Because this is TypeScript and we are returning a JSON object from the call, we want to type he return, I'll use and interface here
export interface ProfileData {
    firstName: string,
    lastName: string,
    age: number
}
export async function getData() {
    try {
        const response = await axios.get("http://localhost:3000/profile");
        console.log(response.data)
        const data: ProfileData | Error = response.data; // Access resolved data
        return data;
    } catch (error) {
        return new Error(`Error encountered during API call: ${error}`);
    }
}






// You can export objects
// (4) Example ways to type properites in an object
// (1) Use Type Assertions to give the properties types
export let obj = {
    f_name: "Andrew" as string,
    l_name: "Davis" as string,
    age: 30 as number
};
// (2) Or use an interface
export interface ObjInt {
    f_name: string,
    l_name: string,
    age: number
}
export let obj2: ObjInt = {
    f_name: "Andrew",
    l_name: "Davis",
    age: 30
}
// (3) Or use a Type
type ObjType = {
    f_name: string,
    l_name: string,
    age: number
}
export let obj3: ObjType = {
    f_name: "Andrew",
    l_name: "Davis",
    age: 30
}
// (4) Or usa a Class
export class ObjClass {
    constructor(
        public f_name: string,
        public l_name: string,
        public age: number
    ) {}
}
export let obj4 = new ObjClass("Andrew", "Davis", 30);