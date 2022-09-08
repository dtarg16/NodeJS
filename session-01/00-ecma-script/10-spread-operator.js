var arrayA = [3,4,5,6];
var arrayB = [3,5,6, "Vivek", function(){}];
var arrayC = [ ...arrayA, ...arrayB, "End "] ;

console.log(arrayA);
console.log(arrayB);
console.log(arrayC);