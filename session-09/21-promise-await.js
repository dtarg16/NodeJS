console.log('Hello node');
global.a ="Dian";

// https://javascript.info/async-await

var timeCounter = function(){ 
    setTimeout(()=>{
        console.log("1. We want this to be First line")
    }, 2000);
    console.log("2. print last");
}

timeCounter();

console.log("----below one is async / await / promise implementation");
var  doPromise = function  () {
    // Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1. must be First line");
            resolve({data:"success XYZ"});
        }, 1000)
    })
}

var timeCounter = async function(){ 
    //fetch . setTimout , database  async
    await new Promise((resolve, reject) => setTimeout(()=>{ 
        console.log("1. We want this to be First line");
        resolve();
    }, 3000));
    /*await doPromise().then((data)=>{
        console.log(JSON.stringify(data));
    })*/
    console.log("2. print last");
}

timeCounter();