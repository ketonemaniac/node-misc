/**
 * New node file
 */
var konphyg = require('konphyg');
var config = konphyg(__dirname + "/config")

// __dirname is a special placeholder to hold the current dir


console.log(__dirname);
console.log(config('iGateway').bocom.ip);