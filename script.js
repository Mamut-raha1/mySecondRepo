'use strict'
let misterPudge

let pudge = function(misterPudge) {
    const res = misterPudge.trim();
    if (res.length<30) {
        alert ("Вы написали меньше 30 символов");
        bigPudge();
    } else if (res.length>=30) {
        return console.log(res.slice(0, 30) + "...");
    }
};

let bigPudge = function () {
    misterPudge = prompt ('Введите что-нибудь', ' misterPudgemisterPudgemisterPudge  ');
    pudge(misterPudge);
};

bigPudge();