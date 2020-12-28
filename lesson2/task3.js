function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let a = getRandomInt(-13, 13);
let b = getRandomInt(-13, 13);

alert('Первая переменная: ' + a);
alert('Вторая переменная: ' + b);

if (a >= 0 && b >= 0) {
    alert(a - b);
}
else if (a < 0 && b < 0) {
    alert(a * b);
}
else {
    alert(a + b);
}