let num = 266219;
let str = num.toString();
let arr = str.split('');
let num1 = 1;


for(let i = 0; i < arr.length; i++) {
    num1 = +arr[i]*num1;
    console.log(num1);
}

let num2 = num1**3;
let str1 = num2.toString();
let str2 = str1.substring(0, 2);

console.log(str2);