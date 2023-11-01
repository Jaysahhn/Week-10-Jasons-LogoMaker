const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const path = require('path');

// Function to generate the logo
async function generateLogo() {
    // so people can type stuff
    const text = await getUserInput('Enter up to three characters: ');
    const textColor = await getUserInput('Enter text color: ');
    const shape = await getUserInput('Choose a shape (circle, triangle, or square): ');
    const shapeColor = await getUserInput('Enter shape color: ');

    let selectedShape;
    let textX = 0;
    let textY = 0;

    // take user input to determine what shape will be made in the SVG file
    if (shape === 'circle') {
        selectedShape = new shapes.Circle(150, 100, 50, shapeColor);
        textX = 150 - (text.length * 5);
        textY = 100;
    } else if (shape === 'triangle') {
        selectedShape = new shapes.Triangle("75,25 25,175 125,175", shapeColor);
        textX = 75 - (text.length * 5);
        textY = 125;
    } else if (shape === 'square') {
        selectedShape = new shapes.Square(100, 50, 100, shapeColor);
        textX = 125 - (text.length * 5);
        textY = 100;
    }

    if (!selectedShape) {
        console.error('Error: No shape selected');
        return;
    }

    const shapeSVGString = selectedShape.render();

    const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeSVGString}
            <text x="${textX}" y="${textY}" font-size="20" fill="${textColor}">${text}</text>
        </svg>
    `;

    const exampleFolder = path.join(__dirname, 'example');

    if (!fs.existsSync(exampleFolder)) {
        fs.mkdirSync(exampleFolder);
    }

    const svgFile = path.join(exampleFolder, 'logo.svg');

    fs.writeFileSync(svgFile, svgString, 'utf-8');

    console.log(`Logo generated successfully! Check ${svgFile}`);
}

async function getUserInput(prompt) {
    const response = await inquirer.prompt({
        type: 'input',
        name: 'input',
        message: prompt
    });
    return response.input;
}

generateLogo();
