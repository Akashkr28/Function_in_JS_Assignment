const factorial = (n) => {

    // base case for recursion function 
    if (n === 0 || n === 1) {
      return 1;
    } else {

       // recursive case for recursion function 
      return n * factorial(n - 1);
    }
};

console.log(`Factorial of 0: ${factorial(0)}`);   // Output: 1
console.log(`Factorial of 1: ${factorial(1)}`);   // Output: 1
console.log(`Factorial of 5: ${factorial(5)}`);   // Output: 120
console.log(`Factorial of 7: ${factorial(7)}`);   // Output: 5040
console.log(`Factorial of 10: ${factorial(10)}`); // Output: 3628800  