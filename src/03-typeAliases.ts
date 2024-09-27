import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";

const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
        email: "rgraham@company.com",
        extension: 121,
    },
};

const colleague2: ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
        email: "pburke@company.com",
        extension: 132,
    },
};



function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
): BuddyList {
    return {
        name,
        members: buddies,
        administrator: admin,
    } as BuddyList;
}

const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends[0], colleague2],
    colleague1
)

const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague1, friends[1]]
    // No administrator
)

console.log(myFootballBuddies)
console.log(myBandBuddies)

// ----------------------------------------

function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
        if (buddy.name === name) {
            if ("phone" in buddy) {
                return buddy.phone;
            }
            else {
                return buddy.contact.email;
            }
        }
        return undefined;
    }
}

// Test for findBuddyContact
// console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));


// 
// // This part contains error in its logic, fix it later!! 
//
function getBuddyListFriends(list: BuddyList): Friend[] {
    let bludList = []

    for (let buddy of list.members) {
        if ('name' in buddy && 'phone' in buddy && 'age' in buddy) {
            bludList.push(buddy);
        }
    }

    return bludList;
}

// console.log(getBuddyListFriends(myFootballBuddies))
// console.log(getBuddyListFriends(myBandBuddies))