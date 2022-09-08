var obj = {
    doSomething: function () {
    this.a = "bob";
        function doAnotherThing () {
            console.log("Name 1: " + this.a);
        };
    console.log("Name2: " + this.a);
    doAnotherThing();
    }
};
    
//What does this print?
obj.doSomething();

console.log("this object points to the nearest (first) PARENT OBJECT");


global.a = "Rama";
obj.doSomething();