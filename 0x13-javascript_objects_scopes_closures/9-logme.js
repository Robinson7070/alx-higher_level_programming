#!/usr/bin/node

/**
 * Prints the number of argument already printed
 * And the new argument value
 */

let nArgs = 0;
exports.logMe = function (item) {
  console.log(nArgs + ' : ' + item);
  nArgs++;
};
