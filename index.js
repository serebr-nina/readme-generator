const inquirer = require('inquirer');
const fs = require('fs/promises');
const generateReadme = require('./utils/generateReadme');
const fileName = './dist/README.md';

const promptReadme = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? (Required)',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project. (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What does a user need to know about installing your project? (Required)',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What does a user need to know about using the repo? (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have? (Required)',
            choices: ['MIT', 'Apache-2.0', 'GPL']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What does a user need to know about contributing to the repo? (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What does a user need to know about testing the project? (Required)',
            validate: usage => {
                if (usage) {
                    return true;
                } else {
                    return false;
                }
            }
        }


    ])
        .then(readmeData => {
            return readmeData;
        });
};

promptReadme()
    .then(readmeData => {
        return generateReadme(readmeData);
    })
    .then(pageReadme => {
        return fs.writeFile(fileName, pageReadme);    
    })
    .then(() => {
        console.log("Your README file is generated!");
    })
    .catch(err => {
        console.log(err);
    });

