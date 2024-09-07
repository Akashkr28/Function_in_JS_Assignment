function generateGreeting(name) {
    return `Hello, ${name} welcome to the course.`;
}

// Now we will create a this function to greet three different people

const greet1 = function (name) {
    this.name = "John";
    console.log(generateGreeting(name));
    },
    greet2 = function (name) {
        this.name = "Jane";
        console.log(generateGreeting(name));
    },
    greet3 = function (name) {
        this.name = "Bob";
        console.log(generateGreeting(name));
    };

greet1("John");
greet2("Jane");
greet3("Bob");  


