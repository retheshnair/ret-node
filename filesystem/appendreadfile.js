const fs = require('fs');
fs.writeFileSync('testdata.txt',"Good evening");

fs.appendFileSync('testdata.txt','\r\nappend to this file');

filedata = fs.readFileSync('testdata.txt');
