function* gen()  
{  
yield 100;  
yield;  
yield 200;  
}  
// Calling the Generator Function  
var mygen = gen();  
console.log(mygen.next().value);  
console.log(mygen.next().value);  
console.log(mygen.next().value); 
