//var c = 300

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   c = 30
  console.log("INNER: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

//------ lec:22 (scope & mini-hoisting) ------

function one() {
  const username = "aamir";
  console.log("one is executed");

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

// one()

if (true) {
  const username = "aamir";
  if (username === "aamir") {
    const website = "youtube";
    console.log(username + website);
  }
  // console.log(website);
  console.log(username); // This will work
}

//  +++++++++++++++++++ interesting example +++++++++++++++++++++


console.log(addone(5)); // 6
function addone(num) {
  return num + 1;
}


const addtwo = function (num) {
  return num + 2;
};
addtwo(5); // 7

// we can use addone function before its declaration because of hoisting
// but we cannot use addtwo function before its declaration because it is a function expression

