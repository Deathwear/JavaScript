/************** Lecture10 (Stack & Heap Memory) ******************/

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchaudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



//Non-Primitive (Heap)
let userOne = {
    email: "userOne@google.com",
    upi: "userOne@ybl",
}

let userTwo = userOne

userTwo.email = "userTwo@google.com"   //it changes the value of userOne also

console.log(userOne.email);
console.log(userTwo.email);
