var objA = {name:"Rama"};
var objB = objA;
var objC = objB;

objB.name = "John";

console.log("What do you think? what is objA.name?")
console.log("objA.name::"+objA.name);


delete(objA);
console.log("objB.name: still exist?:"+objB.name);

delete(objB); //reference count is 1
delete(objC); //reference count is 0

console.log("On reference count 0 .. garbage collection called automatically.");