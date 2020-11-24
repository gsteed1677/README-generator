const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile)

function userQuestions() {
    return inquirer
    .prompt([ 
        {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
        },
        {
        type: "input",
        message: "What is the description of you project?",
        name: "projectDescription",
        },
        {
        type: "input",
        message: "What commands should be run to install dependencies?",
        name: "projectInstall",
        },
        {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "projectUsage",
        },
        {
        type: "input",
        message: "What guidelines do you want to use?",
        name: "projectGuidelines",
        },
        {
        type: "input",
        message: "What commands should be run to test?",
        name: "projectTest",
        },
        {
        type: "input",
        message: "What is your GitHub user name?",
        name: "projectUserName",
        },
        {
        type: "input",
        message: "What is your email?",
        name: "projectEmail",
        }

])
};
var getName = (data) => {
    var queryURL = `https://api.github.com/users/${data.projectUserName}`;
    return axios.get(queryURL)
    
}

function generateMarkdown(data) {
    console.log(data)
  return `
  # Project Title: 
      ${data.projectTitle}

  ## Description:  
      ${data.projectDescription}

  ## How to Install: 
      ${data.projectInstall}

  ## The application will be invoked by using the following command: 
      ${data.projectUsage}

  ## To run a test, follow these commands: 
      ${data.projectTest}
  
  ## What is your GitHub user name:
      ${data.projectUserName}

  ## What is your email?
      ${data.projectEmail}
  
  `;
  
}

async function awaitingFunction() {
    console.log("generating ReadMe")
    try {
    const data = await userQuestions()
    const res = await getName(data)
    const md = await generateMarkdown(data, res.data.html_url)
    
    await writeFileAsync("README.md", md)

    
    } catch (err) {
    console.log(err)
    }
} 


awaitingFunction();

