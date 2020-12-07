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
        choices: ['Apache-2.0', 'GPLv3', 'MIT', 'BSD-2-Clause', 'BSE-3-Clause', 'Boost-1.0', 'CC0-1.0', 'EPL-1.0', 'AGPLv3', 'MPL-2.0', 'GPLv2', 'Unlicense']
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

        // if (answers.license === 'Apache 2.0') {
        //     answers.license = 'Apache%202.0';
        // } else if (answers.license === 'BSD 2-Clause') {
        //     answers.license = 'BSD%202--Clause';
        // } else if (answers.license === 'BSD 3-Clause') {
        //     answers.license = 'BSD%203--Clause'
        // } else if (answers.license === 'Boost 1.0') {
        //     answers.license = 'Boost%201.0';
        // } else if (answers.license === 'CC0 1.0') {
        //     answers.license = 'CC0%201.0';
        // } else if (answers.license === 'EPL 1.0') {
        //     answers.license = 'EPL%201.0';
        // } else if (answers.license === 'AGPL v3') {
        //     answers.license = 'AGPL%20v3';
        // } else if (answers.license === 'MPL 2.0') {
        //     answers.license = 'MPL%202.0';
        // } else if (answers.license === 'GPL v2') {
        //     answers.license = 'GPL%20v2';
        // }

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
