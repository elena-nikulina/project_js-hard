'use strict';

/*let num1 = prompt('Введите значение');


const isNumber = function(num) {
    
    if (num === 'null') {
        num = 0;
    } else {
        num = num.trim();
        num = +num;
    }
      
    return !isNaN((parseFloat(num))) && isFinite(num);
}

if (isNumber(num1)) {
    console.log(num1, typeof(num1));
}*/

const week = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

let today = new Date();

let dayToday = today.getDay();

for(let day of week) {
    if (day !== dayToday && day !== week[0] && week[6]) {
        console.log(day);
    }
    if (day === week[0] || day === week[6]) {
        //day.style.fontStyle = 'italic';
        console.log('<i>' + day + '</i>');
    }
    if (day === dayToday) {
        //day.style.fontStyle = 'bold';
        console.log('<strong>' + day + '</strong>');
    }

}


