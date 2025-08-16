const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "abY3CIrA#H-7GaxVpYCM5pT3Sbaw2spb3vtiaAE4omSaJvf4iyPI",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
