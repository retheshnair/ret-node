console.log("inside ./util.js");

var name = "Rethesh";

const diff = function diff(a,b) {
    return a-b;
}

const multi = function multi(a,b,c) {
    return a*b*c;
}

module.exports = {diff, multi};
