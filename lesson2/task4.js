function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let a = getRandomInt(0, 15);
switch (a) {
    case 1:
        alert(a);
        ++a;
    case 2:
        alert(a);
        ++a;
    case 3:
        alert(a);
        ++a;
    case 4:
        alert(a);
        ++a;
    case 5:
        alert(a);
        ++a;
    case 6:
        alert(a);
        ++a;
    case 7:
        alert(a);
        ++a;
    case 8:
        alert(a);
        ++a;
    case 9:
        alert(a);
        ++a;
    case 10:
        alert(a);
        ++a;
    case 11:
        alert(a);
        ++a;
    case 12:
        alert(a);
        ++a;
    case 13:
        alert(a);
        ++a;
    case 14:
        alert(a);
        ++a;

    case 15:
        alert(a);
        ++a;
    case end:
        alert('END');
        break;
}