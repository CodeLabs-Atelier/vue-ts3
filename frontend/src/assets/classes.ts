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
}
