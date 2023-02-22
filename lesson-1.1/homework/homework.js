'use strict';

let month = 1;

// Пользователь вводит номер месяца, вывести название месяца.

function monthOutput(month) {
    let months = {
        1: 'Январь',
        2: 'Февраль',
        3: 'Март',
        4: 'Апрель',
        5: 'Май',
        6: 'Июнь',
        7: 'Июль',
        8: 'Август',
        9: 'Сентябрь',
        10: 'Октябрь',
        11: 'Ноябрь',
        12: 'Декабрь'
    };

    console.log(months[month]);
}

// monthOutput(month);

// Пользователь вводит номер месяца. Вывести название поры года.

function outputSeason(month) {
    let seasons = {
        'Зима': [12, 1, 2],
        'Весна': [3, 4, 5],
        'Лето': [6, 7, 8],
        'Осень': [9, 10, 11]
    };

    for (let key in seasons) {
        if (seasons[key].includes(month)) {
            console.log(key);
        }
    }
}

// outputSeason(month);

// Даны три числа. Найдите наибольшее число из них.

let setNum = [1, 10, 9];

function findMaxNumber(arr) {
    console.log(Math.max.apply(null, arr));
}

// findMaxNumber(setNum);

// Выведите на экран строки вида:
// *******
// ****
// *******
// ****
// *******
// ****

function outputStrings() {
    let asterisk1 = '*******';
    let asterisk2 = '****';

    for (let i = 1; i <= 7; i++) {
        if (i%2 === 0) {
            console.log(asterisk2);
        } else {
            console.log(asterisk1);
        }
    }
}

// outputStrings();

/* Сгенерировать пароль для пользователя.
 Требования: длина от 6 до 20 символов, должен быть ровно один символ подчеркивания,
 хотя бы две заглавных буквы, не более 5 цифр.
 */

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

let len = 8;

function passwordGenerator(length) {
    let symbol = '!№;%:?*()+=';
    let title = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let low = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let password = '_';

    let arrTitle = shuffle(Array.from(title));
    let numbersArr = shuffle(Array.from(numbers));
    let symbolsArr = shuffle(Array.from(symbol));
    let lowArr = shuffle(Array.from(low));

    let uppercasePosLength = length - 2;
    let uppercaseLength = Math.floor(Math.random() * (uppercasePosLength - 2) + 2);
    let digitLen = Math.floor(Math.random() * (length - uppercaseLength - 1) + 1);
    let remainder = uppercaseLength - digitLen - 1;

    for (let i = 0; i < uppercaseLength; i++) {
        password += arrTitle[i];
    }

    for (let j = 0; j < digitLen; j++) {
        password += numbersArr[j];
    }

    for (let l = 0; l < remainder; l++) {
        password += lowArr[l] + symbolsArr[l];
    }

    let arrPas = shuffle(Array.from(password));
    let result = arrPas.join('');

    console.log(result);
}

passwordGenerator(len);

//Заполнить массив нулями, кроме первого и последнего элементов, которые должны быть равны единице.

function fillArray() {
    let array = [];

    for (let i = 0; i < 6; i ++) {
        array.push(0);
    }

    array[0] = 1;
    array[array.length - 1] = 1;
    
    console.log(array)
}

// fillArray();