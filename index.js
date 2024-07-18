const message = [];

function writeCards(message) {
    let writeCards = ["Guadalupe", "Ollie", "Aki"];
    for (let i = 0; i < writeCards.length; i++) {
    message.splice(i, 2, `Thank you, ${writeCards[i]}, for the wonderful surprise gift!`);
    }

    return(message);
}

writeCards(message);


function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}














    