//singleton
//Object.create

// symbols in keys of objects.
// taking symbol and adding it in the keys of an object
const mySym = Symbol("key1"); //key1 is just the description to understand it is not the value
//we can not take directly mySym as the key of an object you can check by taking it and checking its datatype

const JsUser = {
  name: "Aamir",
  "full name": "Aamir Reza",
  //mySym: "key1",  (it will be used as string)
  [mySym]: "mykey1", //mykey1 is the value of the symbol not key1 that's is just the description for the understanding of the developer
  age: 18,
  location: "Araria",
  email: "amrreza786@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

myArray = ["A", "m"];

console.log(JsUser.email);
console.log(JsUser["email"]); //string ki trh access lene ki jrurt hai
console.log(JsUser["full name"]); //only have this method to access the full name bcz of space
console.log(JsUser[mySym]);
console.log(Object.keys(JsUser)); //symbols are not included in Object.keys
console.log(Object.getOwnPropertySymbols(JsUser));

//symbols doesn't shows up in object.key()

//overwriting values of the keys of an object
JsUser.email = "aamir@chatgpt.com";
console.log(JsUser["email"]);

//we can lock the changes in object values by using freeze property
//Object.freeze(JsUser);
(JsUser.email = "aamir@outlook.com"), console.log(JsUser);

JsUser.greeting = function () {
  console.log("hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/*
Here's a comprehensive list of properties and operations you can work with:

### Core Properties of an Object
1. **constructor**: References the function that created the object's prototype.
2. **__proto__**: Points to the prototype object used to inherit methods and properties.
3. **prototype**: Used mainly with constructor functions for inheritance.
4. **__defineGetter__() / __defineSetter__()**: Define getters or setters for object properties (deprecated but still in use in some contexts).
5. **__lookupGetter__() / __lookupSetter__()**: Find getters or setters associated with a property.

### Common Operations (Methods)
#### Built-in Object Methods
1. **Object.create()**: Creates a new object with a specified prototype.
2. **Object.assign()**: Copies the properties of one or more objects to a target object.
3. **Object.defineProperty()**: Defines a new property on an object or modifies an existing one.
4. **Object.defineProperties()**: Defines multiple properties at once.
5. **Object.entries()**: Returns an array of the object’s key-value pairs.
6. **Object.keys()**: Returns an array of the object's own enumerable property names.
7. **Object.values()**: Returns an array of the object’s own enumerable property values.
8. **Object.freeze()**: Makes an object immutable (cannot add, delete, or modify properties).
9. **Object.seal()**: Prevents adding or deleting properties but allows modification of existing ones.
10. **Object.getOwnPropertyDescriptor()**: Retrieves the descriptor of a specific property.
11. **Object.getOwnPropertyDescriptors()**: Returns descriptors for all properties.
12. **Object.getOwnPropertyNames()**: Returns an array of all properties (including non-enumerable ones).
13. **Object.getPrototypeOf()**: Returns the prototype of an object.
14. **Object.setPrototypeOf()**: Sets the prototype of an object.
15. **Object.is()**: Determines if two values are the same value.
16. **Object.isFrozen() / Object.isSealed()**: Checks if an object is frozen or sealed.
17. **Object.preventExtensions()**: Disallows adding new properties.
18. **Object.isExtensible()**: Checks if new properties can be added.

#### Prototype Chain Methods
1. **hasOwnProperty()**: Checks if the object has a specific property (does not traverse the prototype chain).
2. **isPrototypeOf()**: Checks if an object exists within another object's prototype chain.
3. **propertyIsEnumerable()**: Checks if a property is enumerable.

#### Iteration Methods (via Object or prototypes)
1. **for...in**: Iterates over all enumerable properties, including inherited ones.
2. **forEach()**: Often used with arrays but can apply to mapped objects like Map.

*/
