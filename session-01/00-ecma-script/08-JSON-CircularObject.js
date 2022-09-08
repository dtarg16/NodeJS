
var sonObject = {name:"Vivek"};
var fatherObject = {name:"Amar"};

fatherObject.son = sonObject;

// make object to string
console.log(JSON.stringify(fatherObject));

var fatherObjStr = JSON.stringify(fatherObject);

// string to object
var father = JSON.parse(fatherObjStr);

sonObject.parent = fatherObject;

// Now fatherObject is Circular Object
console.log(JSON.stringify(fatherObject));