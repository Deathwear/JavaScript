// --- Lecture(30): reduce ---

const myNums = [1, 2, 3];

const Total = myNums.reduce(function (accumulator, curr_val) {
  console.log(`accumulator: ${accumulator} and current_value: ${curr_val}`);
  return accumulator + curr_val;
}, 0);
console.log(`Total: ${Total}`);

// writing in arrow function
const myTotal = myNums.reduce((acc, curr_val) => acc + curr_val, 0);
console.log(`Total: ${myTotal}`);


// example:

const shopping_cart = [
  {
    itemName: "js Course",
    price: 2999
  },
  {
    itemName: "py Course",
    price: 999
  },
  {
    itemName: "mobile dev Course",
    price: 5999
  },
  {
    itemName: "data science Course",
    price: 12999
  },
]


const priceToPay = shopping_cart.reduce( (acc, item) => acc + item.price, 0)
console.log(`Price: ${priceToPay}`);
