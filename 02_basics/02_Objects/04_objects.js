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










/**
     ----------------list of object operations in js ----------------
### **1. Object Creation**
- **Object Literals:**
  ```javascript
  const obj = { key: "value" };
  ```
- **Constructor Function:**
  ```javascript
  function MyObject(param) {
    this.key = param;
  }
  const obj = new MyObject("value");
  ```
- **`Object.create()`:**
  ```javascript
  const newObj = Object.create(proto);
  ```

---

### **2. Adding Properties**
- **Dot Notation:**
  ```javascript
  obj.newKey = "newValue";
  ```
- **Bracket Notation:**
  ```javascript
  obj["newKey"] = "newValue";
  ```

---

### **3. Accessing Properties**
- **Dot Notation:**
  ```javascript
  console.log(obj.key);
  ```
- **Bracket Notation:**
  ```javascript
  console.log(obj["key"]);
  ```

---

### **4. Updating Properties**
- **Update a property:**
  ```javascript
  obj.key = "updatedValue";
  ```

---

### **5. Deleting Properties**
- **Delete a property:**
  ```javascript
  delete obj.key;
  ```

---

### **6. Iterating Through an Object**
- **Using `for...in`:**
  ```javascript
  for (const key in obj) {
    console.log(key, obj[key]);
  }
  ```
- **Using `Object.keys()` and `forEach`:**
  ```javascript
  Object.keys(obj).forEach(key => console.log(key, obj[key]));
  ```
- **Using `Object.entries()` and `for...of`:**
  ```javascript
  for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
  ```

---

### **7. Checking Properties**
- **`in` Operator:**
  ```javascript
  console.log("key" in obj);
  ```
- **`hasOwnProperty()`:**
  ```javascript
  console.log(obj.hasOwnProperty("key"));
  ```

---

### **8. Cloning Objects**
- **Using Spread Syntax (`...`):**
  ```javascript
  const clonedObj = { ...obj };
  ```
- **Using `Object.assign()`:**
  ```javascript
  const clonedObj = Object.assign({}, obj);
  ```

---

### **9. Merging Objects**
- **Using Spread Syntax:**
  ```javascript
  const mergedObj = { ...obj1, ...obj2 };
  ```
- **Using `Object.assign()`:**
  ```javascript
  const mergedObj = Object.assign({}, obj1, obj2);
  ```

---

### **10. Object Freezing and Sealing**
- **`Object.freeze()`:**
  ```javascript
  Object.freeze(obj);
  ```
- **`Object.seal()`:**
  ```javascript
  Object.seal(obj);
  ```

---

### **11. Object Destructuring**
- **Extract Properties:**
  ```javascript
  const { key1, key2 } = obj;
  ```

---

### **12. Advanced Operations**
- **Get Property Names:**
  ```javascript
  const keys = Object.keys(obj);
  ```
- **Get Property Values:**
  ```javascript
  const values = Object.values(obj);
  ```
- **Get Entries (Key-Value Pairs):**
  ```javascript
  const entries = Object.entries(obj);
  ```
- **Create Object from Entries:**
  ```javascript
  const obj = Object.fromEntries([["key", "value"]]);
  ```

---

This should give you a clear overview of all the object operations with their corresponding syntax. Let me know if you'd like practical examples of any! 😊
 */
