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
    const username = "aamir"
    console.log("one is executed");
    

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}

one()
//hello


