var a = 9;
var b = 8;

function mySum(a, b) {
    return a + b;
}

function myDiff(a, b) {
    return a - b;
}

function myDiv(a, b) {
    return a / b;
}

function myMult(a, b) {
    return a * b;
}
alert('a = ' + a);
alert('b = ' + b);

alert('a + b =' + mySum(a, b));
alert('a - b =' + myDiff(a, b));
alert('a / b =' + myDiv(a, b));
alert('a * b =' + myMult(a, b));