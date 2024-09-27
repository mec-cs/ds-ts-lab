import { friends, colleagues } from "./01-basics";

import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass } from "./myTypes";

function updateFriend(friend: Friend, updates: FriendPartial) : Friend {
    return { ...friend, ...updates };
}

// console.log(updateFriend(friends[0], {
//     phone: "08712345",
//     dob: new Date("1998-10-22"),
// }))


function secureFindFriends(
    friends: Friend[],
    criteria: (f: Friend) => boolean
): SecureFriendContact[] {

    const matches = friends.filter(criteria);
    return matches.map((f) => {
        const secure: SecureFriendContact = {
            name: f.name,
            phone: f.phone
        };
        return secure;
    });
}

let result = secureFindFriends(
    friends,
    (f: Friend) => f.age < 30
)

// console.log(result);

// causes compile-time error, since its readonly
// result[0].phone = "08654321";

function generateEventPass(colleague: Colleague): EventPass {
    const passCode = Math.round(Math.random() * (1000 - 1) + 1);
    return {
        name: colleague.name,
        department: colleague.department,
        passCode: passCode
    };
}

// console.log(generateEventPass(colleagues.current[0]));


// Not completed section, fix the if condition part
function intersection(
    friends: Friend[],
    colleagues: Colleague[]
  ): EventPass[] {
    
    let result: EventPass[] = []

    friends.reduce((res, friend) => {
      const colleague = colleagues.find((col) => col.name === friend.name);
      if (colleague) {
        // Colleague is also a Friend
        res.push({
            name: colleague.name,
            department: colleague.department,
            passCode: 0
          });
      }
      return res;
    }, result);
    return result;
  }
  
  console.log(intersection(friends, colleagues.current));