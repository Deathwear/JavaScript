# JavaScript Array reduce()

In JavaScript, `reduce()` is a powerful array method that **condenses an array into a single value** by applying a callback function to each element, one by one.

## 🧠 How It Works

- It loops through the array.
- It keeps track of an **accumulator** (a running total or result).
- For each element, it applies a function that updates the accumulator.
- At the end, it returns the final accumulated value.

### 🧪 Syntax

```javascript
array.reduce((accumulator, currentValue, currentIndex, array) => {
  // logic to update accumulator
}, initialValue);
```

- `accumulator`: the value returned from the previous iteration
- `currentValue`: the current element being processed
- `initialValue`: optional starting value for the accumulator

### 🔍 Example: Sum of Numbers

```javascript
const numbers = [10, 20, 30];
const total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // Output: 60
```

### 🎯 Use Cases

- Summing numbers
- Flattening arrays
- Counting occurrences
- Grouping items
- Removing duplicates

### 🧸 Bonus Example: Grouping by Category

```javascript
const items = [
  { name: 'Apple', category: 'Fruit' },
  { name: 'Carrot', category: 'Vegetable' },
  { name: 'Banana', category: 'Fruit' }
];

const grouped = items.reduce((acc, item) => {
  const key = item.category;
  acc[key] = acc[key] || [];
  acc[key].push(item.name);
  return acc;
}, {});

console.log(grouped);
// Output: { Fruit: ['Apple', 'Banana'], Vegetable: ['Carrot'] }
```

Want to try building something with `reduce()`? Maybe a mini leaderboard or a score tracker for your adventure game? I’d love to help you shape it!
