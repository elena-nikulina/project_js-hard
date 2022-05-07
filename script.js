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

for (let j = 0; j < week.length; j++) {
    
    if (week[j] !== week[dayToday] && j !== 0 && j !== 6) {
        document.write(week[j] + '<br>');
    }
    else if (week[j] === week[dayToday] && j !== 0 && j !== 6) {
        document.write('<strong>' + week[j] + '</strong>' + '<br>');
    }
    else if (week[j] !== week[dayToday] && (j === 0 || j === 6)) {
        document.write('<i>' + week[j] + '</i>' + '<br>');
    }
    else if (week[j] === week[dayToday] && (j === 0 || j === 6)) {
        let day = '<strong>' + week[j] + '</strong>';
        document.write('<i>' + day + '</i>' + '<br>');
    }
    
}
