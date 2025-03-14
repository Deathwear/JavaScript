const accountId = 144553
let accountEmail = "aamir@google.com"
var accountPassword = "12345"
accountCity = "Araria"

//const, let, var:
//we try to change all values
//bcz JS is a safe language, it lets us use the variable without declaring the datatype although it is not a good practice

//accountId = 2   // this change is not allowed

accountEmail = "ar@gmail.com"
accountPassword = "2345"
accountCity = "Delhi"

//console.log(accountId);
console.table([accountId, accountCity, accountEmail, accountPassword])  
//console.table([]); will represent the all output in a table format as their indexes and values
//here, accountId can not bed changed because it is a const. variable

/* variables can be declared as let and var
but var is not much used because of the  issue of block scope and functional scope
*/

//what if:  (js me aap semicolon lgao ya na lgao apki mrzi hai frq nhi pdta hai cz it is an easy lang)
let accountState;

console.log(accountState);
// guess accountState value (it will be undefined for now)