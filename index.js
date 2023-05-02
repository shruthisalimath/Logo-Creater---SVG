const fs = require('fs');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');

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
        type: 'list',
        name :'shapeType',
        message : 'Select shape of the logo',
        choices : ['Circle','Square','Triangle'],

    },
    {
        type: 'input',
        name :'shapeColor',
        message : 'Enter color keyword  or a hexadecimal number of the text',

    },

];
inquirer.prompt(questions)
.then((response) => {
    const text = response.text;
    const textColor = response.textColor;
    const shapeType = response.shapeType;
    const shapeColor = response.shapeColor;

    generateShapes(text,textColor,shapeType,shapeColor);
})
.catch((err) => console.log(err));

function generateShapes(text, textColor, shapeType, shapeColor) {
    if (shapeType === 'Triangle') {
        const triangle = new Triangle(text, textColor, shapeColor)
        return fs.writeFile('logo.svg',triangle,(err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("SUCCESS!");
            }
        });   
       
    }

    if (shapeType === 'Circle') {
        const circle = new Circle(text, textColor, shapeColor)
        return `<svg width="300" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg> `
    }

    if (shapeType === 'Square') {
        const square = new Square(text, textColor, shapeColor)
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }

}

