let D = new Date();
// console.log(D);
// console.log(D.toString());
// console.log(D.toISOString());
// console.log(D.toJSON());
// console.log(D.toLocaleDateString());
// console.log(D.toLocaleString());
// console.log(D.toDateString());

// let myBirthDate = new Date(2004,7 ,15);
// console.log(myBirthDate.toDateString());

// let aDate = new Date(2004,7 ,15,12,36);
// console.log(aDate.toLocaleString());

let aDate = new Date("03-13-2022");//MM-DD-YYYY
// console.log(aDate.toLocaleString());

// let aTimeStamp = Date.now();
// console.log(aTimeStamp);
// console.log(aDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

`${newDate.getDay()} and the month`

newDate.toLocaleString('default',{
    weekday: 'long',
})
console.log(newDate.toLocaleString('default',{
    weekday: 'long',
}));



console.log();