// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#Licenses)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [Question](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This application is covered under the license of ${data.license}.

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  If you want to track the changes of the application, please feel free to visit my github at:
  [https://github.com/${data.github}](https://github.com/${data.github})

  In additions, please feel free to contact me if you have any questions about the application.
  My email address is: <${data.email}>
  `;
}

module.exports = generateMarkdown;
