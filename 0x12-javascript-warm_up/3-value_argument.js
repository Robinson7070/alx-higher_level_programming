#!/usr/bin/node

// Prints first argument passed to it

const myArgs = process.argv[2];
if (myArgs === undefined) {
  console.log('No Argument');
} else {
  console.log(myArgs);
}
