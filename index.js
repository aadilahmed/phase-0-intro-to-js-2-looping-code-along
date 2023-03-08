// Code your solutions in this file
function writeCards(names, eventName) {
    const newArray = [];
    for(let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return newArray;
}

function countDown(number) {
    let counter = number;
    while(counter >= 0) {
        console.log(counter--);
    }
}