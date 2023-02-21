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

monthOutput(month);

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

outputSeason(month);

// Даны три числа. Найдите наибольшее число из них.

let setNum = [1, 10, 9];

function findMaxNumber(arr) {
    console.log(Math.max.apply(null, arr));
}

findMaxNumber(setNum);

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

    for (let i = 0; i < 6; i++) {
        if (i%2) {
            console.log(asterisk2);
        } else {
            console.log(asterisk1);
        }
    }
}

outputStrings();