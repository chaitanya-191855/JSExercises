// Destructuring & Spread Operator
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// - Complete the Try it secion in the above article
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Given an object
// 	{
// 		name: "Ravi",
// 		id : 1122,
// 		age : 29
// 	}

// Create a two variables
// 1. name - Its value should be "Ravi"
// 2. otherProperties - Its value should be {
// 	id : 1122,
// 	age : 29
// }
const obj = {
  name: "Ravi",
  id: 1122,
  age: 29,
};
const { name, ...otherProperties } = obj;

console.log(name); //Ravi
console.log(otherProperties); //{id:1122,age:29}
