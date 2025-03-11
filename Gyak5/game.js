const maxtipp = 20;
const randomnum = getRandomIntInclusive(0, 1000000);
let tippdb = 0;
console.log("Add meg a tipped!")

while(tippdb < maxtipp){
    console.log('Eddigi tippjeid száma: ', tippdb);
    let tipp = parseInt(prompt("Adj meg egy számot!"));

    if(tipp == randomnum){
        alert("Talált! Tippjeid száma:");
        break;
    }
    else if(tipp < randomnum){
        tippdb ++;
        alert("A szám nagyobb mint a tipped!");
    
    }
    if(tipp > randomnum){
        tippdb ++;
        alert('A szám kisebb mint a tipped!');
    }
}

alert(`Nem sikerült eltalálnod, a szám ${randomnum} volt`);

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

