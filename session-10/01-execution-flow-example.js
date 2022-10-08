import { nextTick } from 'node:process';
console.log("hello 001 ");

// direct
///process.exit(5)

setImmediate(() => { //event loop
    console.log("before Exit 005 ");
    process.exit(5)
});
console.log("hello 002");

nextTick(() => { // do this before going for event loop // but after current 12 taks
    console.log('nextTick  ?? '); //hello 004
  });

  console.log("hello 003");  
