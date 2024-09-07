function curry(fn) {

    // Return a function that recursively collects arguments until all are provided
    return function curried(...args) {

      // Check if the number of arguments provided is enough to call the original function
      if (args.length >= fn.length) {

        // If yes, call the original function with all arguments
        return fn(...args);
      } 
      else {
        // If not, return a function that collects more arguments
        return function(...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
}
  
  // Example function to test: adds two numbers
  function add(a, b) {
    return a + b;
  }
  
  // Create a curried version of the add function
  const curriedAdd = curry(add);
  
  // Test the curried function
  console.log(curriedAdd(2)(3)); // Output: 5
  console.log(curriedAdd(4, 5)); // Output: 9
  console.log(curriedAdd(6)(7)); // Output: 13  