const licenseLink = {'MIT' : 'https://opensource.org/licenses/MIT',
                    'Apache-2.0' : 'https://opensource.org/licenses/Apache-2.0',
                    'GPL' : 'https://opensource.org/licenses/gpl-license'};

const licenseBadge = {'MIT' : 'https://img.shields.io/badge/license-MIT-blue',
                      'Apache-2.0' : 'https://img.shields.io/badge/license-Apache--2.0-blue',
                      'GPL' : 'https://img.shields.io/badge/license-GPL-blue'};

// Create a function to generate markdown for README
generateReadme = (data) => {
  return `# ${data.title} <img src="${licenseBadge[data.license]}">

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license} License - ${licenseLink[data.license]}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

For any  questions refer to my Github https://github.com/${data.github} or email me at ${data.email}.

`;
}

module.exports = generateReadme;
