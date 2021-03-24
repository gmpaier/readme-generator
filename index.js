const fs = require("fs");
const inquirer = require("inquirer");
//const util = require("util");

//const readFileAsync = util.promisify(fs.readFile);
//const writeFileAsync = util.promisify(fs.writeFile);

getPortInfo();

async function getPortInfo() {
  try{
    const {name, location, bio, linkedin, github} = await inquirer.prompt([
        {
            message: "What is your name?",
            name: "name"
        },
        {
            message: "Where do you live?",
            name: "location"
        },
        {
            message: "Tell us about yourself:",
            name: "bio"
        },
        {
            message: "What is your LinkedIn account?",
            name: "linkedin"
        },
        {
            message: "What is your GitHub profile?",
            name: "github"
        }
    ]);

    let content = ``

    
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

