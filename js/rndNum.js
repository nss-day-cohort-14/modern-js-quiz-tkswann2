'use strict';

const rndNum = (little, big) => {
    let num1 = little || 0,
            num2 = big || 100;
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
};


module.exports = rndNum;