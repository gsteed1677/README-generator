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



function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ## Description  ${data.projectDescription}

  ## How to Install ${data.projectInstall}

  ## The application will be invoked by using the following command: 
      ${data.projectUsage}

  
  
  
  
  `;
  
}

async function awaitingFunction() {
    console.log("generating ReadMe")
    try {
    const prompt = await userQuestions()
    const md = await generateMarkdown()
    } catch (err) {
    console.log(err)
    }
} 

}

userQuestions();
