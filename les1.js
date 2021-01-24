/*
 Написать функцию, преобразующую число в объект. 
 Передавая на вход число от 0 до 999, надо получить на выходе объект, 
 в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
 Например, для числа 245 надо получить следующий объект: 
 {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение 
с помощью console.log и вернуть пустой объект.
 */


// Ключи (единицы, десятки, сотни) перевел на англ. (oneUnit, ozens, undreds).

console.log('task 1')
/*
const conventer = {
    'oneUnit' : 0,
    'dozens' : 0,
    'hundreds' : 0
};

for (const key in conventer) {
    console.log(key, conventer[key]);
}
*/

const conventer = {};

// Не смог объеденить (num > 999 && num < 0), вероятно не правилно записал условие
function myConventer(num){
    console.log(`Введенное число: ${num}`);
    if (num > 999) {
        return console.log ('Число не может быть больше 1000')  
    }
    else if (num < 0) {
        return console.log ('Число не может быть меньше 0')
    }
    else {
        b = num % 10;
        num = num - b;
        c = num % 100;
        num = num - c;
        d = num % 1000;
        return conventer.oneUnit = b, conventer.dozens = c / 10, conventer.hundreds = d /100
    }
}



/*
// Проверка объекта
console.log('Проверка conventer:');
for (const key in conventer) {
    console.log(key, conventer[key]);
};
*/

