interface Friend {
    name: string;
    phone: string;
    age: number;
}

const friend1: Friend = {
    name: "Jake Paul",
    phone: "087-12345",
    age: 26,
};

const friend2: Friend = {
    name: "Mike Tyson",
    phone: "086--12345",
    age: 56,
};

const friends: Friend[] = [friend1, friend2];
console.log(friends[1]);


//   -------------------

interface Colleague {
    name: string;
    department: string;
    contact: {
        email: string;
        extension: number;
    };
}

interface ColleagueHistory {
    current: Colleague[],
    former: Colleague[]
}

const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@company.com",
        extension: 121,
    },
};

const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
        email: "pburke@company.com",
        extension: 132,
    },
};

const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
        email: "dos@company.com",
        extension: 125,
    },
};

const colleagues: ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
};

console.log(colleagues.current[0]);


