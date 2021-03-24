const fs = require("fs");
const inquirer = require("inquirer");


getPortInfo();

async function getPortInfo() {
  try{
    let license_badge;
    const {title, description, installation, usage, license, contributing, tests, email, github} = await inquirer.prompt([
        {
            message: "What is your project name?",
            name: "title"
        },
        {
            message: "Enter a project description: ",
            name: "description"
        },
        {
            message: "What are the installation instructions?",
            name: "installation"
        },
        {
            message: "What are the usage instructions?",
            name: "usage"
        },
        {
            type: "list",
            message: "Which licensing does this project use?",
            choices: ["ISC", "BSD", "MIT"],
            name: "license"
        },
        {
            message: "What are the contributing guidelines?",
            name: "contributing"
        },
        {
            message: "What are the testing protocols?",
            name: "tests"
        },
        {
            message: "What is your email?",
            name: "email"
        },
        {
            message: "What is your GitHub profile?",
            name: "github"
        }
    ]);

    switch(license){
        case "ISC":
          license_badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
          break;
        case "BSD":
          license_badge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
          break;
        case "MIT":
          license_badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
          break;
        default:
            console.log("There appears to be a license error");
    }

    let content = `
# ${title}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${license_badge}

## Contributing

${contributing}

## Tests

${tests}

## Questions

For any questions, please contact Griffin Paier via  
* Github: ${github}
* Email: ${email}`

    
    await fs.writeFile("readme.md", content, function(err){
        if (err){
            throw new console.error("There was an error writing.");
        }
        else{
            console.log("success");
        }
    });


  }
  catch(err){
      console.log("There seems to be an error")
  }

}

