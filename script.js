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

let arr=[];
let arr1 = [];

arr = ['2435', '342189', '4312670', '13256432', '354', '42318', '897642'];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '2' || arr[i][0] === '4') {
        console.log(arr[i]);
    }
}

console.log(1 + ' Делители: ' + ' 1 ');
console.log(2 + ' Делители: ' + ' 1 ' + 2);
console.log(3 + ' Делители: ' + ' 1 ' + 3);
console.log(5 + ' Делители: ' + ' 1 ' + 5);
console.log(7 + ' Делители: ' + ' 1 ' + 7);

for (let j = 8; j < 100; j++) {
    
    if (j % 2 !== 0 && j % 3 !== 0 && j % 5 !== 0 && j % 7 !== 0) {
        arr1.push(j);
        console.log(j + ' Делители: ' + ' 1 ' + j);
    }
}

