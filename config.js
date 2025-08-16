const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "SA0DxJoR#D7iUgD5TDZzyIuD4W5kwsWrBcfW3KXLz-Od_a5_YG-I",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
