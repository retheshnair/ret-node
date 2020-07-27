const fs = require('fs');
fs.writeFileSync('testdata.txt',"Good evening");

fs.appendFileSync('testdata.txt','\r\nappend to this file');

fs.readFileSync('testdata.txt');

output = fs.readFileSync('testdata.txt', 'utf8');

console.log(output)