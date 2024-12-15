function foo(a, b) {
  if (a == null || b == null || typeof a !== 'number' || typeof b !== 'number') {
    return null; // Or handle the error in a more appropriate way
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(1, null)); // null
console.log(foo(null, null)); // null
console.log(foo(1, undefined)); // null
console.log(foo(undefined, 2)); // null
console.log(foo(undefined, undefined)); // null