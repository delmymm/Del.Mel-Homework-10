const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'list',
      message: 'What is your role',
      name: 'role',
      choices: [
        "Engineer",
        "Intern",
        "Manager"
      ],
    },
    {
      type: 'input',
      message: 'What is your ID number?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    }
  ]).then(function (response) {
    let generateHTML = `# ${response.title}\n
    ${response.name}\n
    ${response.role}\n
    ${response.id}\n
    ${response.email}\n
    `
    writeToFile('team.html', generateHTML)
  })
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return;
    };
  });
}; 