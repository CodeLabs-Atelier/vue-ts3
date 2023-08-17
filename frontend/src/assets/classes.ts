export class Client {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getPropertyNames(): string[] {
        return Object.keys(this) as string[];
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    setName(name: string): void {
        this.name = name
    }
    setAge(age: number): void {
        this.age = age
    }
}
