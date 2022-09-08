var arrayA = [3,4,5,6,7,8 ];
//filter
var arrayB = arrayA.filter((item)=>(item !=8));

// JSON.stringify
console.log("arrayB"+JSON.stringify(arrayB));

// map
arrayA.map(function(item){
    console.log("item is "+item);
})

var arraySort = arrayA.sort((a,b)=>{
    if(a>b){
        return -1;
    }else{
       return 1; 
    }
});

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
//
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/groupBy