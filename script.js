let lang = 'ru';

let days_ru = [
    'вс', 'пн', 'вт', 'ср', 'чт', 'пн', 'сб'
];

let days_en = [
    'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'
];

let date = new Date();
let day_number = date.getDay();

if (lang == 'ru') {
    console.log(days_ru[day_number]);
} else if (lang == 'en') {
    console.log(days_en[day_number]);
}

switch(lang) {
    case 'ru': 
        console.log(days_ru[day_number]);
        break;
    case 'en':
        console.log(days_en[day_number]);
        break;
    default:
        console.log('Такого языка не предусмотрено!');
        break;
}

let lang_arr = [ ['вс', 'пн', 'вт', 'ср', 'чт', 'пн', 'сб'], 
                ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']];

let r = 0;
let p = 0;
    
while ((lang == 'ru') && (r ==0)) {
    console.log(lang_arr[0][day_number]);
    r++;
}

while ((lang == 'en') && (p ==0)) {
    console.log(lang_arr[1][day_number]);
    p++;
}
 
let namePerson = 'Александр';
namePerson = namePerson =='Артем' ? console.log('директор') :
            namePerson =='Александр' ? console.log('преподаватель') : console.log('студент');


