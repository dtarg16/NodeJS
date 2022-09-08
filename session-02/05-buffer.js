console.log("Hello to NodeJS 1234");
var buf1 = Buffer.from("hello",'utf8');
console.log("buf1 :",buf1);
console.log("buf1 :",buf1.length);

var ubuf = Buffer.alloc(5);
console.log(ubuf);
// buffer set of Memory 
// refer that memeory