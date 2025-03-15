// ----------- lecture:13 (Dates) ----------

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

let myCreatedDatewithTime = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDatewithTime.toLocaleString());

//date in any specific format
let myCreatedDate01 = new Date("03-15-2025"); //mm-dd-yyyy format
console.log(myCreatedDate01.toLocaleString());

//using timestamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now() / 1000); //to convert into seconds but output can be in decimal format so use Math.floor with it for e.g;
console.log(Math.floor(Date.now() / 1000)); // output will be seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); // similarly other things can be obtained
console.log(newDate.getDay());

//string interpolation

console.log(
  ` The Date is ${newDate.getDate()} and the time is ${newDate.toLocaleTimeString()}`
);

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
);
