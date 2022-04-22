let sum = 0;
let acc = 2;

function checkVeelvoud(getal) {
    return new Promise((resolve, reject) => {
        let parsed_getal = parseInt(getal);
            if (parsed_getal % acc !== 0) {
                reject("programma vroegtijdig gestopt. dit is geen veelvoud van " + acc + ": " + parsed_getal);
            } else {
                acc++;
                sum += parsed_getal;
                resolve("som is: " + sum);
            }

        }
    );
}

function leesGetal() {

    return new Promise((resolve, reject) => {
            let input = prompt("geef getal (veelvoud van " + acc + ")");
            if (!isNaN(input)) {
                resolve(input);
            } else reject("dit is geen getal: " + input);
        }
    );
}

function log(bericht) {
    alert(bericht);
}

leesGetal().then(checkVeelvoud).then(leesGetal).then(checkVeelvoud).then(leesGetal).then(checkVeelvoud).then(log).catch(log);

