const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "93FWCT4T#U8awShDdu8GXy9bopctUslFRx84sIiO5Ys18SFmuZnA",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
