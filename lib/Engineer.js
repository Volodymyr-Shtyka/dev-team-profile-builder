// Import the Employee class
const Employee = require("./Employee");

// Define the Engineer class that inherits from Employee
class Engineer extends Employee {
    // Constructor for Engineer class
    constructor(name, id, email, github) {
        // Call the constructor of the Employee class
        super(name, id, email);
        // Set additional property specific to Engineer
        this.github = github;
    }

    // Method to return the engineer's GitHub username
    getGithub() {
        return this.github;
    }

    // Override the getRole() method to return "Engineer"
    getRole() {
        return "Engineer";
    }
}

// Export the Engineer class
module.exports = Engineer;