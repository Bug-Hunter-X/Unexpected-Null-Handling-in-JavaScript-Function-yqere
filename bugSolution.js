function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Throw error for nulls
  }
  return a + b; // Normal addition
}

console.log(foo(1, 2)); // Output: 3
//console.log(foo(null, 2)); // Throws error
//console.log(foo(1, null)); // Throws error
//console.log(foo(null, null)); // Throws error

//Alternative solution with default values:
function foo2(a = 0, b = 0) {
    return a + b;
}
console.log(foo2(1,2)); //Output:3
console.log(foo2(null,2)); //Output:2
console.log(foo2(1, null)); //Output: 1
console.log(foo2(null, null)); //Output: 0