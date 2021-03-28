var request = require("request");
var opn = require('opn');

// config
var version = "1.0"

// code
console.log("\x1b[34m", "\x1b[1m", "YouCare BOT V" + version, "\x1b[0m");
console.log("\x1b[1m", "\x1b[5m", "Starting ...", "\x1b[0m");
console.log("");

function youCare() {

    var url = "https://random-word-api.herokuapp.com/word?number=1";
    var youcare = "https://youcare.world/all?l=fr&q=";

    request({
        url: url,
        json: true
    }, function (error, response, body) {
    
        if (!error && response.statusCode === 200) {
            var link = youcare + body;
            console.log('\x1b[1m', "New research :", "\x1b[0m", "\x1b[32m", link, "\x1b[0m");
            console.log("")
            opn(link);
        }
    })
    setTimeout(youCare,15000);
}

youCare();


