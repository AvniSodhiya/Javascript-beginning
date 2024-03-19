/* primitive 
7 types -> String ,Number ,Boolean,null, undefined, Symbol, BigInt
*/

const score = 100;
const val = 100.4;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;//undefined

// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id == anotherId);//gives false as unique

const bigNumber = 923456678102345456n;//last main n lagane par BigInt ki tarah treat hoga

//number number hai float alag se defined nahi hai

// Javascript is dynamically typed language

//Reference(Non Primitive)

// Array, Objects, Functions

// const heroes = ["shaktiman","doga"];
// let myObj = {
//     name: "Avni Sodhiya",
//     age: 19,//; nahi lagega object ke andar
// }

//  const myFunction = function(){
//     console.log("Hello World");
//  }

// console.log(typeof outsideTemp);//null ka typeof karne pe object aata hai

// console.log(typeof myFunction);//object funcion bhi bolte hain

console.log(typeof val);

/**************************************************/

//Stack (primitive), Heap(Non-Primitive)

// numbers ,boolean ye stack main jaate hain aur yahan copy provide karte hain agar to previous waale ko fark nahi padta

// objects ka data heap main jaata hai aur wo hi as reference diya jaata hai dusre waaale ko to any chnges in that data will affect previous one too! 