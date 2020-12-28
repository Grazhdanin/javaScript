function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
        case '+':
            return arg1 + arg2;
            break;
        case 'вычитание':
        case '-':
            return arg1 - arg2;
            break;
        case 'деление':
        case '/':
            return arg1 / arg2;
            break;
        case 'умножение':
        case '*':
            return arg1 * arg2;
            break;
    }
}

alert(mathOperation(2, 2, '+'));
alert(mathOperation(2, 2, '-'));
alert(mathOperation(2, 2, '/'));
alert(mathOperation(2, 2, '*'));

