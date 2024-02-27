const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

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

    const timestamp = Date.now();
    const fileName = `team-${timestamp}.html`;
    const outputPath = path.join(OUTPUT_DIR, fileName);
    const htmlContent = render(teamMembers);
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`Team HTML file generated at ${outputPath}`);
}

gatherTeamInfo();