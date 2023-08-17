export interface Name {
    firstName: string
    lastName: string
};

export let names = ['alpha','bravo','charlie', 'delta '];

export let namesMap: Name[] = names.map((name, index) => {
    return {
        firstName: name.charAt(0).toUpperCase(),
        lastName: names[index].charAt(0).toUpperCase() // Same value as just 'name'
    } as Name;
});
