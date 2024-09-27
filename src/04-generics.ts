import { friends, colleagues } from "./01-basics";
import {Friend, Colleague} from "./myTypes";

function findMatch<T>( data : T[], criteria: (d: T) => boolean ) : T | undefined {
    return data.find((criteria))
}

// console.log(findMatch<Friend>(friends, (f) => f.name.startsWith("Jane") ));
// console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === "Finance" ));


function returnSortedCopy<T>( data: T[], sorter: (a: T, b: T) => number ): T[] | undefined {
    return data.sort(sorter);
}

// Sort friends by age
console.log(returnSortedCopy<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
    returnSortedCopy<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);