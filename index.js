const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const hexRefs = {
    //betas
    "JOHN": "",
    "JUNE": "", 
    "EB": "",
    "ROSE": "",
    "DAVE": "",
    "JADE": "",
    //alphas
    "JANE": "",
    "ROXY": "", 
    "DIRK": "",
    "JAKE": "", 
    "GT": "", 
    //beta trolls
    "ARADIA": "", 
    "AA": "", 
    "TAVROS": "", 
    "AT": "", 
    "SOLLUX": "", 
    "TA": "",
    "KARKAT": "",
    "CG": "",
    "NEPETA": "", 
    "AC": "",
    "KANAYA": "", 
    "GA": "", 
    "TEREZI": "",
    "GC": "",
    "VRISKA": "",
    "AG": "", 
    "EQUIUS": "",
    "CT": "", 
    "GAMZEE": "", 
    "TC": "", 
    "ERIDAN": "",
    "CA": "", 
    "FEFERI": "", 
    "CC": "",
    //alpha trolls 
    "DAMARA": "",
    "RUFIOH": "", 
    "MITUNA": "", 
    "KANKRI": "", 
    "MEULIN": "",
    "PORRIM": "",
    "LATULA": "", 
    "ARANEA": "", 
    "HORUSS": "", 
    "KURLOZ": "",
    "CRONUS": "", 
    "MEENAH": "",
    //other 
    "HAL": ""
}

const doubles = ["TT","TG","GG"]

// "utf8" encodes the raw buffer data in human-readable format
fs.readFileAsText("unformated.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }
  
    console.log(data);
    //split data by two newline 
    //iterate
        //split that by newline 
            //do stuff on that 
  
});

//check if key exists 
//if it does, proceed, otherwise add to an array to be manually modified 


// const html = generateHTML(answers);
// return writeFileAsync("index.html", html);