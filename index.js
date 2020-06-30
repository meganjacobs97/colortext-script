const fs = require("fs");
const util = require("util");
const hexRefs = require('./hexRefs.js');

const writeFileAsync = util.promisify(fs.writeFile);



let outputData = "";

const unformatted = [];

// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data.txt", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    splitData(data);

});

splitData = (data) => {
    //add in inital html
    outputData +=
        `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Color Text</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>`

    //split data by two newline 
    const log = data.split("\n\n");
    //iterate
    for (let i = 0; i < log.length; i++) {
        //split that by newline 
        let lines = log[i].split("\n");
        //do stuff on that 
        outputData += `<p>`
        for (let j = 0; j < lines.length; j++) {
            outputData += generateLineHTML(lines[j]);
            outputData += `<br>`
        }
        outputData += `</p>`
    }
    //add in unformatted 
    outputData += `<hr><h1>UNFORMATTED LINES</h1>`
    for (let i = 0; i < unformatted.length; i++) {
        outputData += `<p>${unformatted[i]}</p>`
    }

    //finish html
    outputData += `</body>
    </html>`

    //write file
    return writeFileAsync("index.html", outputData);
}

generateLineHTML = (str) => {
    //index of colon
    const colIndex = str.search(":");
    //get key
    const key = str.substring(0, colIndex);
    const hexCode = hexRefs[key];
    //strip off beginning before colon
    let substrIndex = colIndex + 1;
    if (str.substring(colIndex + 1, colIndex + 2) === " ") {
        substrIndex++;
    }
    if (hexCode) {
        return `<span style='color:${hexCode}'>${str.substr(substrIndex)}</span>`
    } else {
        unformatted.push(str);
        return `<span>${str}</span>`

    }
}
