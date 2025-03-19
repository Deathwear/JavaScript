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
//const obj3 = Object.assign({}, obj1, obj2, obj4); //giving empty parenthesis

const obj3 = { ...obj1, ...obj2, ...obj4 };

console.log(obj3);

//when value comes from database (object inside an array)

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //IMPORTANT
console.log(Object.values(tinderUser)); //IMPORTANT
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//-------------Lecture:18 (De-structuring & JSON API)---------

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

//course.courseInstructor (no need to always use this)
const { courseInstructor: instructor } = course;
console.log(instructor);

/* e.g; for de-structuring:
const navbar = ({ company }) => {};
navbar((company = "aamir"));
*/


//{
//  name: "hitesh",
//  coursename: "js in hindi",
//  price: "free"
//}

//many we get api's data in array format also 
//[
//  {},
//  {},
//  {},
//]

//check random user me api

