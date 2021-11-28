function writeCards(name, event) {
    let messages = []
    for(let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`)
    }
    return messages;
}

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    }
}