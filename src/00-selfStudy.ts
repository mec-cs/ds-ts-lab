export function arrayMutate(
    numbers: number[],
    mutate: (num: number) => number
): number[] {
    return numbers.map(mutate);
}


// console.log(arrayMutate([1, 2, 3], (num) => num * 10));

const selectiveDecrement = (n : number) => {
    return n > 100 ? n - n * 0.1 : n;
}

// console.log(arrayMutate([110, 20, 300], selectiveDecrement));


// clear syntax with type aliases
type MutationFunction = (v: number) => number;

export function cleanArrayMutate(
    numbers: number[],
    mutate: MutationFunction
): number[] {
    return numbers.map(mutate);
}

// console.log(cleanArrayMutate([1, 2, 3], (num) => num * 100));

const mutate : MutationFunction = (num) => num * 10;
const arr : number[] = [5, 10, 15];

// console.log(cleanArrayMutate(arr, mutate));

export const fetchData = (url: string) => {
    return Promise.resolve(`Data from ${url}`);
}

interface Person {
    first: string,
    last: string,
}

export const fetchPerson = (url: string): Promise<Person> => {
    const result: Person = {
        first: "jack",
        last: "alan",
    };

    return Promise.resolve(result);
}

// console.log(fetchPerson);

type Department = "Engineering" | "Sales" | "Accounts";
type StaffMember = Person & {department: Department};

let a : StaffMember = {
    first: "a",
    last: "b",
    department: "Sales"
}

const company : StaffMember[] = [
    {...a, last: "changed-last-name1", department: "Engineering"},
    {...a, last: "changed-last-name2", department: "Accounts"},
    {...a, last: "changed-last-name3", department: "Sales"},
]

// console.log(company)

const getStaffNames = (department: Department): string[] => {
    return company.filter((staff => staff.department === department)).map(staff => staff.first + staff.last + staff.department);
}

// console.log("Acc ", getStaffNames("Accounts"), "\nEng ", getStaffNames("Engineering"), "\nSale ", getStaffNames("Sales"));


// generics

// without generics use

function stringRanker(
    strings: string[],
    ranker: (s: string) => number,
): string[] {
    const result = strings.sort((a, b) => ranker(a) - ranker(b));
    return result;
}

const stringsByLength = stringRanker(
    ["hello", "to", "the", "universe"],
    (str) => str.length
);

// console.log("String sort by length ", stringsByLength);


// with generics
function rankerFunction<T>(
    data: T[],
    ranker: (s: T) => any,
): T[] {
    return data.sort((a, b) => ranker(a) - ranker(b));
}

const numByLengths = rankerFunction<number>(
    [123, 1, 12345, 12, 1234],
    (num) => num
);

const newStringComparison = rankerFunction(
    ["1234", "1", "123", "12", "12345"],
    (str) => str.length
)

// console.log(numByLengths);
// console.log(newStringComparison);

interface Employeee {
    name: string,
    age?: number,
}

const employeeeComparison = rankerFunction(
    [{name: "jack"}, {name: "joe", age: 12}, {name: "seb", age: 18}, {name: "efe", age: 9}],
    (p) => p.age ? p.age : 6 // it works fine, but doesnt add that value to the original
);

// console.log(employeeeComparison);


interface Microphone {
    make: string;
    range: number;
}

interface Speaker {
    manufacturer: string;
    model: string;
    ports: string[];
}

interface Box<T> {
    shelfNo: number;
    content: T[];
}

const box1: Box<Speaker> = {
    shelfNo: 3,
    content: [
        {
            manufacturer: "SubZero",
            model: "SZPA-P15",
            ports: ["USBA", "USBC"],
        },
    ]
};


interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function fetchToDos(request: string): Promise<ToDo[]> {
    const response = await fetch(request);
    const body = (await response.json()) as ToDo[];
    return body;
}



// Without use of "async" & "await", instead, using "then"
function getToDosThen(): Promise<ToDo[]> {
    return fetchToDos("https://jsonplaceholder.typicode.com/todos");
}

function getCompletedToDosThen(): Promise<string[]> {
    return getToDos()
        .then((todos) => todos.filter((todo) => todo.completed))
        .then((completedTodos) => completedTodos.map((todo) => todo.title));
}

getToDosThen().then((todos) => {
    console.log("All ToDos:", todos);
});

getCompletedToDosThen().then((completedToDos) => {
    console.log("Completed ToDos:", completedToDos);
});


// With the use of "async" and "await"
async function getToDos(): Promise<ToDo[]> {
    return await fetchToDos("https://jsonplaceholder.typicode.com/todos");
}

async function getCompletedToDos(): Promise<string[]> {
    return (await getToDos())
        .filter((todo) => todo.completed)
        .map((todo) => todo.title);
}

async function printToDos() {
    const todos = await getToDos();
    console.log(todos);

    const completedToDos = await getCompletedToDos();
    console.log(completedToDos);
}

printToDos();
