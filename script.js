let num = 266219;
let str = num.toString();
let arr = str.split('');
let num1 = 1;


for(let i = 0; i < (num.toString()).length; i++) {
    num1 = +(((num.toString())).split(''))[i]*num1;
}


console.log(((num1**3).toString()).substring(0, 2));