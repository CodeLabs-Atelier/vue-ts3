export interface Name {
    firstName: string
    lastName: string
};

export let names = ['alpha','bravo','charlie', 'delta '];

export let names_map = names.map((name, index) => {
    return {
        firstName: name,
        lastName: names[index] // Same value as just 'name'
    } as Name;
});

// Comment 1: main