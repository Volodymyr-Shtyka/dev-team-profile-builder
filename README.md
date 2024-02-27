# Dev Team Profile Builder

## Description

The Dev Team Profile Builder is a command-line application built with Node.js that allows managers to efficiently
generate HTML webpages displaying summaries for their software development team members. This application simplifies the
process of creating team profiles by guiding the user through prompts to input information about each team member,
including their name, employee ID, email address, and specific role within the team (manager, engineer, or intern).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

To use the Dev Team Profile Builder, follow these steps:

1. Clone the repository to your local machine:
    ```
    git clone https://github.com/Volodymyr-Shtyka/dev-team-profile-builder.git
    ```

2. Navigate to the project directory:
    ```
    cd dev-team-profile-builder
    ```

3. Install the required dependencies:
    ```
    npm install
    ```

## Usage

To run the Dev Team Profile Builder, execute the following command in your terminal:

```
node index.js
```

Follow the prompts to enter information about each team member. Once you've finished adding team members, an HTML file
containing the team profile will be generated in the output folder.

## Tests

The Dev Team Profile Builder project includes tests located in the __tests__ folder. These tests ensure that the classes
and functions within the project behave as expected and meet the specified requirements. The tests cover the following
aspects:

- **Employee Class Tests:** Tests for the Employee class include checking if an Employee instance can be instantiated,
  if properties can be set via constructor arguments, and if methods such as `getName()`, `getId()`, `getEmail()`,
  and `getRole()` return the expected values.

- **Engineer Class Tests:** Tests for the Engineer class include checking if a GitHub account can be set via constructor
  arguments, if the `getRole()` method returns "Engineer", and if the `getGithub()` method returns the GitHub username.

- **Intern Class Tests:** Tests for the Intern class include checking if a school can be set via constructor arguments,
  if the `getRole()` method returns "Intern", and if the `getSchool()` method returns the school name.

- **Manager Class Tests:** Tests for the Manager class include checking if an office number can be set via constructor
  arguments, if the `getRole()` method returns "Manager", and if the `getOfficeNumber()` method returns the office
  number.

Each test ensures that the corresponding class or function behaves correctly and produces the expected output.

To run the tests, use the testing framework specified for the project (e.g., Jest). Execute the tests by running the
appropriate command in your terminal.

```
npm test
```

Ensure that all tests pass before making any changes to the project code to maintain its functionality and reliability.

## Deployed Application

Access the deployed application and an example of the generated HTML file [here](https://volodymyr-shtyka.github.io/dev-team-profile-builder/output/team-1709070497750.html).

## Questions

If you have any questions or need further assistance with the Dev Team Profile Builder, please feel free to contact the
project creator:

- GitHub: [github.com/Volodymyr-Shtyka](https://github.com/Volodymyr-Shtyka)
- Email: vladimirshtyka@gmail.com

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
