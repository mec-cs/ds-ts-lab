import { colleagues, friends } from "./01-basics"
import {Friend, Colleague, EmailContact} from "./myTypes"

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

// console.log(older(friends[0]))

function allOlder(fs: Friend[]) : string[] {
    let output: string[] = []

    for (let index = 0; index < fs.length; index++) {
        fs[index].age += 1
        output.push(`${fs[index].name} is now ${fs[index].age}`)
    }

    return output
}

// console.log(allOlder(friends))


function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );

    return result[cs.length - 1]
}

// console.log(highestExtension(colleagues.current))



function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    let newExt: number = highestExtension(cs).contact.extension + 1
    
    const newColleague: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: newExt
        }
    };

    cs.push(newColleague)
}

// addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
        end = max < 2 ? 1 : max;
    }
    
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// Test invocations
// console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
// console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(
    friends: Friend[],
    criterion: (f: Friend) => boolean
): string[] {
    return friends.filter(criterion).map(f => f.name);
}

const condition1 = (friend) => friend.name.startsWith('Pa');
const condition2 = (friend) => friend.age < 35;

// console.log(findFriends(friends, condition1));
// console.log(findFriends(friends, condition2));


function addInterest(
    friend: Friend,
    interest: string,
): string[] {
    if (friend.interests !== undefined) {
        friend.interests.push(interest);
        return friend.interests
    } else {
        return [];
    }
}

console.log(addInterest(friends[1], 'Politics'))