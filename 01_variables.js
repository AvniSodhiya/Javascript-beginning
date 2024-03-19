const accountId = 144356
let accountEmail = "avni2gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"//it is possible that memory is reserved but not a good practice
let accountState;

//accountId = 2345 const can't be changed
/*
Prefer not to use var
because of issue in block scope and fuctional scope */
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])