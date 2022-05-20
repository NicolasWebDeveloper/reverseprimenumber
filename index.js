let toNumber = 100000; //Number you want to count

function primCheck(number) {
    let notPrim = 0;
    for (let i = 1; i <= number; i++) {
        let modulo = number % i;
        if (i === 1 || i === number) {
            continue;
        }
        
        if (modulo != 0) {
            notPrim++;
        }
        
        //console.log("Ergebniss von derzeitigem Modulo Aufruf: " + modulo)
    }
    
    //console.log("notPrim = " + notPrim)
    if (notPrim != number - 2) {
        //console.log("Keine Primzahl")
        return false;
    } else {
        //console.log("Primzahl!")
        return true;
    }
}

//Stackoverflow https://stackoverflow.com/questions/44771147/reverse-an-integer-in-javascript
function reverse(n) {  
  return Number(Array.from(String(Math.abs(n))).reverse().join('')) * Math.sign(n);
}
//stackoverflow end

for (let x = 1; x <= toNumber; x++) {
    let reverseNumber = reverse(x);
    if (primCheck(x) == true && primCheck(reverseNumber) == true) {
        console.log("Superprim found:" + x)
    } else {
        //console.log("Not found!")
    }
} 
