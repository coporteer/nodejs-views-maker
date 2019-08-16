
const request = require('request');
const interval = getRandomInt(1800000,3600000); // ETC. 30m to 60m
const interval2 = getRandomInt(2,11); // Set your wanted views per cycle
const url ='http://bit.ly/2Z9h1ye'; //Paste your wanted URL
//const interval = getRandomInt(1000,3000); // Testing-Code

function accessweb(){
    request(url, { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
            console.log(body.url);
            console.log(body.explanation);
});
}

function getRandomInt(min, max) { //min ~ max 사이의 임의의 정수 반환
    return Math.floor(Math.random() * (max - min)) + min;
}

function accesswebrepeat(times){
    for (var i =0; i < times; i++){
        setTimeout(accessweb,1000);
    }
}

function accesswebmulti(){

    switch (interval2) {
        case 2 :
            accesswebrepeat(2);
            break;
        case 3 :
            accesswebrepeat(3);
            break;
        case 4 :
            accesswebrepeat(4);
            break;
        case 5 :
            accesswebrepeat(5);
            break;
        case 6 :
            accesswebrepeat(6);
            break;
        case 7 :
            accesswebrepeat(7);
            break;
        case 8 :
            accesswebrepeat(8);
            break;
        case 9 :
            accesswebrepeat(9);
            break;
        case 10 :
            accesswebrepeat(10);
            break;
        case 11 :
            accesswebrepeat(11);
            break;
        default :
            console.log("Not estimated number!")
            break;

    }


}

setInterval(accesswebmulti, interval);
