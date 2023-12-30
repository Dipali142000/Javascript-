const accountID = 1444445;
let accountEmail = "dippali@gmail.com"
var accountPassword = "gmgknkt252"
accountCity = "Delhi"
let accountState;

// accountID =2 //not allowed

accountEmail = "pali@gmail.com"
accountPassword = "jhefge88"
accountCity = "Nashik"

console.log(accountID);


/*
Prefer not use var
because of issue in block scope and function scope
*/

console.table([ accountID, accountEmail, accountPassword, accountCity, accountState])
