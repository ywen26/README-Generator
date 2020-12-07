const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
const markdown = require('./utils/generateMarkdown');

// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter your project installation instruction:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter your project test instruction:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address:',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('File created successfully!');
    });
}

// function to initialize program
async function init() {
    console.log('Welcome');
    try {
        const answers = await inquirer.prompt(questions);

        // const html = generateHTML(answers);
        const readme = markdown(answers);

        // await writeFileAsync('index.html', html);
        writeToFile('READMESample.md', readme);

    }   catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();
