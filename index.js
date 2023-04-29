const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name :'text',
        message : 'Enter text for logo (please enter 3 characters)',

    },

    {
        type: 'input',
        name :'textColor',
        message : 'Enter color keyword  or a hexadecimal number of the text',

    },
    {
        type: list,
        name :'shapeType',
        message : 'Select shape of the logo',
        choices : ['circle','square','triangle'],

    },
    {
        type: input,
        name :'shapeColor',
        message : 'Enter color keyword  or a hexadecimal number of the text',

    },

];
inquirer.prompt(questions)
.then((response) => {
    fs.writeFile('logo.svg',shapes(response.text,response.textColor,response.shapeType,response.shapeColor),(err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("SUCCESS!");
        }
    });   
})
.catch((err) => console.log(err));
