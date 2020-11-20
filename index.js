const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown");

function userQuestions() {
    inquirer
    .prompt([ 
        {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle",
        },
        {
        type: "input",
        message: "What is the the description of you project?",
        name: "projectDescription",
        }


])



.then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;


fs.writeFile(filename, JSON.stringify(data), (err) =>
    err ? console.log(err) : console.log("Success!")
    );
})



}

