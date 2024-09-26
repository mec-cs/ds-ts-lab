import { colleagues, friends } from "./01-basics"
import {Friend, Colleague} from "./myTypes"

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

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));