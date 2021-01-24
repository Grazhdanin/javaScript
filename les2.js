
/*
    Продолжить работу с интернет-магазином: 
    a. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
 Какими объектами можно заменить их элементы? 
    b. Реализуйте такие объекты. 
    c. Перенести функционал подсчета корзины на объектноориентированную базу. 
 */

console.log('task 2');

// Корзина
const shoppingCart = {};
// Товары
const productV1 = {
    'id': 001,
    'name': 'Apple',
    'price': 99
};


const productV2 = {
    'id': 002,
    'name': 'Pear',
    'price': 113
 };
    

const productV3 = {
    'id': 003,
    'name': 'Banana',
    'price': 51
};  

// Добавление в корзину
shoppingCart.position1 = productV1;
shoppingCart.position2 = productV2;
shoppingCart.position3 = productV3;

for (const key in shoppingCart) {
    console.log(shoppingCart[key]);
};


// Сумма товаров
function countBasketPrice(basket){
    let total = 0;
    for (const key in basket) {
        total = total + basket[key].price;
    }
    return console.log(`Общая сумма товаров: ${total}`);
}
    
console.log(countBasketPrice(shoppingCart));
