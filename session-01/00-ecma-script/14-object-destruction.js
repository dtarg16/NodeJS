
var person = {name:"Vivek", email:"vivek.s@intel.com"};

// object destructuring
var {name,email} = person;

// array destructuring
var list = [ 7, 42 ]
var [ a = 1, b = 2, c = 3, d ] = list
a === 7
b === 42
c === 3
d === undefined

console.log("a is "+a);
console.log("name is "+name);
console.log("name is "+email);