function calculateTax(income) {

    // Defining a closure to determine the tax rate based on the income
    const getTaxRate = (function() {
        if (income < 10000) {
            return 0.05;
        } else if (income < 20000) {
            return 0.1;
        } else {
            return 0.15;
        }   
    })()

     // Calculate the tax using the tax rate determined by the closure
    const taxAmount = income * getTaxRate;
    return taxAmount
}

// Testing the function with various incomes

console.log(`Tax for 8000 income: ${calculateTax(8000)}`);  
console.log(`Tax for 20000 income: ${calculateTax(20000)}`); 
console.log(`Tax for 50000 income: ${calculateTax(50000)}`); 