'use strict';

let str1 = '     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa alias blanditiis sint id eveniet, voluptates ex quod repellat, vero nesciunt earum aliquid. Veritatis nemo praesentium, velit porro rerum asperiores ratione voluptatum deleniti dignissimos quae necessitatibus culpa, temporibus, expedita consectetur!';
let arrStr;
let str0;
let strNew;
let str2 = prompt('Введите строку');

function checkStr(str) {
    
    if (typeof(str) !== 'string') {
        console.log('Передана не строка!');

    } else {
        str = str.trim();
        if (str.length > 30) {
            strNew = str.substring(0, 30);
            arrStr = strNew.split('');
            arrStr.push('.');
            arrStr.push('.');
            arrStr.push('.');
            str0 = arrStr.join('');
            console.log(str0);
        }
    }
}

checkStr(str1);
checkStr(str2);