function sum (a,b) {return a+b;};
console.log("sum A "+sum(2,5));

var sumA = (a,b) =>{return a+b;}
console.log("sum A "+sumA(2,5));

var sumB = (a,b) =>(a+b);
console.log("sum B "+sumB(2,9));

function addition (a) {return function(b){return a+b}};
//addition(a)(b);
console.log("addition:"+addition(4)(67));

var additionA = a => b =>  (a+b);
console.log("additionA:"+additionA(4)(8));

// see => used three times
var additionB = a => b => c => (a+b);
console.log("additionB:"+additionB(4)(7)(5));