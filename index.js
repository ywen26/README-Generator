const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const markdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        messeage: 'Enter your project title: ',
    },
    {
        type: 'input',
        name: 'description',
        messeage: 'Enter your project description: ',
    },
    {
        type: 'input',
        name: 'installation',
        messeage: 'Enter your project installation instruction: ',
    },
    {
        type: 'input',
        name: 'usage',
        messeage: 'Enter your project usage information: ',
    },
    {
        type: 'input',
        name: 'contribution',
        messeage: 'Enter your contribution guidelines: ',
    },
    {
        type: 'input',
        name: 'test',
        messeage: 'Enter your project test instruction: ',
    },
    {
        type: 'list',
        name: 'license',
        messeage: 'Please choose a license: ',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'None']
    },
    {
        type: 'input',
        name: 'github',
        messeage: 'Enter your GitHub username: ',
    },
    {
        type: 'input',
        name: 'email',
        messeage: 'Enter your Email address: ',
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
