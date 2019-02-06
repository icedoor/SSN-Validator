const inquirer = require("inquirer");
const { validateSSN, validateNotNull } = require('./validators');

const run = async () => {

    const question = [
        {
            name: "SSN",
            type: "input",
            message: "Input a Swedish social security number to validate:",
            validate: (value) => {
                if (!validateNotNull(value)) {
                    return "Input is null!";
                }
                if (!validateSSN(value)) {
                    return `Input, ${value}, is not a valid social security number!`;
                }

                return true;
            }
        }
    ];


    inquirer.prompt(question).then(answer => {
        if (!answer) {
            return;
        }
        console.log(`${answer['SSN']} is a valid social security number`);
    })
};

run();
