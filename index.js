const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");

const render = require("./src/page-template.js");

const teamMembers = [];

async function gatherTeamInfo() {
    console.log("Please enter information for the team manager:");
    const managerInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the team manager's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the team manager's email address:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the team manager's office number:"
        }
    ]);

    const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.officeNumber);
    teamMembers.push(manager);

    let addAnother = true;
    while (addAnother) {
        const {choice} = await inquirer.prompt({
            type: "list",
            name: "choice",
            message: "What would you like to do next?",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        });

        switch (choice) {
            case "Add an engineer":
                await addEngineer();
                break;
            case "Add an intern":
                await addIntern();
                break;
            case "Finish building the team":
                addAnother = false;
                break;
        }
    }

    const timestamp = Date.now();
    const fileName = `team-${timestamp}.html`;
    const outputPath = path.join(OUTPUT_DIR, fileName);
    const htmlContent = render(teamMembers);
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Team HTML file generated at ${outputPath}`);
}

async function addEngineer() {
    console.log("Please enter information for the engineer:");

    const engineerInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the engineer's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address:"
        },
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username:"
        }
    ]);

    const engineer = new Engineer(engineerInfo.name, engineerInfo.id, engineerInfo.email, engineerInfo.github);
    teamMembers.push(engineer);
}

async function addIntern() {
    console.log("Please enter information for the intern:");

    const internInfo = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's employee ID:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address:"
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school:"
        }
    ]);

    const intern = new Intern(internInfo.name, internInfo.id, internInfo.email, internInfo.school);
    teamMembers.push(intern);
}

gatherTeamInfo();