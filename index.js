// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data,(err) =>{
        if(err){
            return err
        }
    })
    console.log("File is Ready!");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type:"input",
            message:"Enter Project Title?",
            name:"projecttitle"
      },
      {
        type:"input",
        message:"Enter description:",
        name:"description"
  },
{
    type:"input",
    message:"Installation requirments:",
    name:"installationrequirments"
},
{
    type:"input",
    message:"Usage:",
    name:"descriptionusage"
},
{
    type:"list",
    message:"License:",
    choices:["MIT","ISC","APACHE 2.0","GPL","None"],
    name:"license"
},
{
    type:"input",
    message:"Who's Contributing:",
    name:"contributing"
},
{
    type:"input",
    message:"Tests:",
    name:"tests"
},
{
    type:"input",
    message:"Github user name",
    name:"github"
},
{
    type:"input",
    message:"Email",
    name:"email"
},

]).then(response =>{

    let readMeContent = `
# Title: ${response.projecttitle}

## Table of contents
* [Description](#description)
* [Installation reuirments](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribute](#contritube)
* [Test](#test)
* [Github](#github)
* [Email](#email)

### Description
${response.description}

### Installation
${response.installationrequirments}

### Usage
${response.descriptionusage}

### License
${response.license}
![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)


### Contributors
${response.contributing}    

### Tests
${response.tests}

### Github 
${response.github}

### Email
${response.email}
    `
    console.log(readMeContent)
    return readMeContent
}).then(data => {
    writeToFile("README.md", data)
})
}

// Function call to initialize app
init();
