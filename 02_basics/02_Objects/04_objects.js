//const tinderUser = new Object()  //[singleton object]
const tinderUser = {}; //[non-singleton object]

tinderUser.id = "123abc";
tinderUser.name = "aamir";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

//nesting in object
const regularUser = {
  email: "some@gmai.com",
  fullname: {
    userfullname: {
      firstname: "aamir",
      lastname: "reza",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);
// "?" this helps in if this is present then do this
console.log(regularUser.fullname?.userfullname.firstname);

//combining object like combining array

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" }; //lec:17 timestamp: 7:00
const obj4 = { 5: "a", 6: "b" };

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2, obj4); //giving empty parenthesis
console.log(obj3);

