const fs = require('fs');
const inquirer = require('inquirer');
const generateBadge = require('./utils/generateMarkdown.js')

function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Please leave any question blank if it is not applicable\nWhat is the title of your project?",
                name: "projectName"
            },
            {
                type: "input",
                message: "What is your project's description?",
                name: "projectDesc"
            },
            {
                type: "input",
                message: "What are the steps to install your project?",
                name: "projectInstall"
            },
            {
                type: "input",
                message: "How do you use your project?",
                name: "projectUsage"
            },
            {
                type: "input",
                message: "Include any credits that you used in your project",
                name: "projectCredits"
            },
            {
                type: "list",
                message: "Which license does your project want?",
                choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilaa Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0", "The Unlicense"],
                name: "projectLicense"
            },
            {
                type: "input",
                message: "List your project's features if there are many",
                name: "projectFeatures"
            },
            {
                type: "input",
                message: "Let other developers know how they can contribute to your project",
                name: "projectContribute"
            },
            {
                type: "input",
                message: "Write tests for your project",
                name: "projectTests"
            },
            {
                type: "input",
                message: "Include a table of contents? (Leave blank if no)",
                name: "projectToC"
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "projectUserName"
            },
            {
                type: "input",
                message: "What is your email address? (So people can ask you questions)",
                name: "projectEmail"
            }
        ])
        .then(response => {
            let badge = generateBadge(response.projectLicense);
            let readMeTemplate =
                `# ${response.projectName}
${badge}

## Description
${response.projectDesc}

${response.projectToC ? '## Table of Contents\n* [Installation](#Installation)\n* [Usage](#Usage)\n* [Credits](#Credits)\n* [License](#License)\n* [Features](#Features)\n* [How-to-Contribute](#How-to-Contribute)\n* [Tests](#Tests)' : ''}

${response.projectInstall ? '## Installation' : ''}
${response.projectInstall}

${response.projectUsage ? '## Usage' : ''}
${response.projectUsage}

${response.projectCredits ? '## Credits' : ''}
${response.projectCredits}

${response.projectLicense ? '## License' : ''}
This project is licensed under ${response.projectLicense}
See badge for more info.

${response.projectFeatures ? '## Features' : ''}
${response.projectFeatures}   

${response.projectContribute ? '## How-to-Contribute' : ''}
${response.projectContribute}

${response.projectTests ? '## Tests' : ''}
${response.projectTests}

## Questions
For questions, reach out to them on [GitHub](https://github.com/${response.projectUserName}), or contact them [here](mailto:${response.projectEmail})
`
            fs.writeFile("DYNAMIC_README.md", readMeTemplate, err => {
                err ? console.error(err) : console.log('Code worked!')
            })

        })
}

init();
