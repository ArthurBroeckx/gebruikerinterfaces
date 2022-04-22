let sum = 0;

function telbij(getal) {
    return new Promise((resolve, reject) => {
        sum += parseInt(getal);
            if (sum > 100) {
                reject("probleem som is groter dan 100, nl. " + sum);
            } else
                resolve("dit is de som getal: " + sum);
        }
    );
}

function leesGetal() {

    return new Promise((resolve, reject) => {
        let input = prompt("geef getal");
        if (!isNaN(input)) {
            resolve(input);
        } else reject("dit is geen getal: " + input);
    }
    );
}

function log(bericht) {
    alert(bericht);
}

leesGetal().then(telbij).then(leesGetal).then(telbij).then(leesGetal).then(telbij).then(log).catch(log);



