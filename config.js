const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "aZdFXSRA#R2sMRAyzwhF3tSaqPE7uf_xwHNH59uuYZIjtW1KbAXg",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
