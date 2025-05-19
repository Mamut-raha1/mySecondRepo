'use strict';

let lang = prompt ('Choose your language/Выберите Ваш язык', 'ru/en/something');
if (lang=='ru') {
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.')
} else if (lang=='en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.')
} else {
    console.log('omg, fuck your language')
};

switch (true){
    case lang=='ru':
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.');
        break
    case lang=='en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.');
        break
    default:
        console.log('omg, fuck your language')
};

const week = {
    ru: ["Понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
}
console.log(week[lang]);

let namePerson = prompt ('Кто ты?', '');
namePerson=="Артем"? console.log('Директор')
    :namePerson=="Алескандр"?  console.log('Преподаватель')
    :console.log('Студент');
