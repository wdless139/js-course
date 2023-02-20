'use strict';

let month = 1;

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