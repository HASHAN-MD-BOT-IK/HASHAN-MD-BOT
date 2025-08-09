const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "BQgnXSAb#KSQ-NEFr-A6nSCCMwMnTdFShGk-z2NSHrzpdY4tPgvc",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
