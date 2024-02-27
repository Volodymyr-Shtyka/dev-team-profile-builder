// Define the Employee class
class Employee {
    // Constructor for Employee class
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Method to return the employee's name
    getName() {
        return this.name;
    }

    // Method to return the employee's ID
    getId() {
        return this.id;
    }

    // Method to return the employee's email
    getEmail() {
        return this.email;
    }

    // Method to return the employee's role (always returns "Employee")
    getRole() {
        return "Employee";
    }
}

// Export the Employee class
module.exports = Employee;