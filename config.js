const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    
SESSION_ID: process.env.SESSION_ID || "JNgwBJIJ#dwHJUtl8YNDrHA3zjZ0SeCaVtD1JAf3NACb-BeUAVmw",
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",

}
