function writeCards(names, event) {
    let messages = [];
    for (let c = 0; c < names.length; c++) {
        messages.push(`Thank you, ${names[c]}, for the wonderful surprise gift!`)

    }
    return messages;
}

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
}