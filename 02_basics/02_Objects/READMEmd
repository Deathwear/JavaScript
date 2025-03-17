# **JavaScript Objects and Operations**

This repository provides a comprehensive guide on JavaScript objects, their properties, and operations, complete with syntax examples.

---

## **What are Objects in JavaScript?**

Objects in JavaScript are collections of key-value pairs. They are used to store, organize, and manipulate data.

### Example

```javascript
const example = { name: "Aamir", age: 30 };
```

---

## **Table of Contents**

1. Object Creation
2. Adding Properties
3. Accessing Properties
4. Updating Properties
5. Deleting Properties
6. Iterating Through an Object
7. Checking Properties
8. Cloning Objects
9. Merging Objects
10. Object Freezing and Sealing
11. Object Destructuring
12. Advanced Operations

---

## **1. Object Creation**

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

- **Using `Object.create()`:**

  ```javascript
  const newObj = Object.create(proto);
  ```

---

## **2. Adding Properties**

- **Dot Notation:**

  ```javascript
  obj.newKey = "newValue";
  ```

- **Bracket Notation:**

  ```javascript
  obj["newKey"] = "newValue";
  ```

---

## **3. Accessing Properties**

- **Dot Notation:**

  ```javascript
  console.log(obj.key);
  ```

- **Bracket Notation:**

  ```javascript
  console.log(obj["key"]);
  ```

---

## **4. Updating Properties**

```javascript
obj.key = "updatedValue";
```

---

## **5. Deleting Properties**

```javascript
delete obj.key;
```

---

## **6. Iterating Through an Object**

- **Using `for...in`:**

  ```javascript
  for (const key in obj) {
    console.log(key, obj[key]);
  }
  ```

- **Using `Object.keys()` and `forEach`:**

  ```javascript
  Object.keys(obj).forEach((key) => console.log(key, obj[key]));
  ```

- **Using `Object.entries()` and `for...of`:**

  ```javascript
  for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
  }
  ```

---

## **7. Checking Properties**

- **`in` Operator:**

  ```javascript
  console.log("key" in obj);
  ```

- **`hasOwnProperty()`:**

  ```javascript
  console.log(obj.hasOwnProperty("key"));
  ```

---

## **8. Cloning Objects**

- **Using Spread Syntax:**

  ```javascript
  const clonedObj = { ...obj };
  ```

- **Using `Object.assign()`:**

  ```javascript
  const clonedObj = Object.assign({}, obj);
  ```

---

## **9. Merging Objects**

- **Using Spread Syntax:**

  ```javascript
  const mergedObj = { ...obj1, ...obj2 };
  ```

- **Using `Object.assign()`:**

  ```javascript
  const mergedObj = Object.assign({}, obj1, obj2);
  ```

---

## **10. Object Freezing and Sealing**

- **`Object.freeze()`:**

  ```javascript
  Object.freeze(obj);
  ```

- **`Object.seal()`:**

  ```javascript
  Object.seal(obj);
  ```

---

## **11. Object Destructuring**

```javascript
const { key1, key2 } = obj;
```

---

## **12. Advanced Operations**

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

### **Contribute**

Feel free to fork this repository, contribute examples, or suggest improvements! 😊

---

This README file can help guide users through object operations effectively. Let me know if you'd like to add more sections or make any changes! 🚀
