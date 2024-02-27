// Import the Employee class
const Employee = require("./Employee");

// Define the Intern class that inherits from Employee
class Intern extends Employee {
    // Constructor for Intern class
    constructor(name, id, email, school) {
        // Call the constructor of the Employee class
        super(name, id, email);
        // Set additional property specific to Intern
        this.school = school;
    }

    // Method to return the intern's school
    getSchool() {
        return this.school;
    }

    // Override the getRole() method to return "Intern"
    getRole() {
        return "Intern";
    }
}

// Export the Intern class
module.exports = Intern;