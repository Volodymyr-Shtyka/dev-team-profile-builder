// Import the Employee class
const Employee = require("./Employee");

// Define the Manager class that inherits from Employee
class Manager extends Employee {
    // Constructor for Manager class
    constructor(name, id, email, officeNumber) {
        // Call the constructor of the Employee class
        super(name, id, email);
        // Set additional property specific to Manager
        this.officeNumber = officeNumber;
    }

    // Method to return the manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    }

    // Override the getRole() method to return "Manager"
    getRole() {
        return "Manager";
    }
}

// Export the Manager class
module.exports = Manager;