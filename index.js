let toNumber = 100000;

function primeCheck(number) {
    let notPrime = 0;
    for (let i = 1; i <= number; i++) {
        let modulo = number % i;
        if (i === 1 || i === number) {
            continue;
        }
        
        if (modulo != 0) {
            notPrime++;
        }
        
    }
    
    if (notPrime != number - 2) {
        return false;
    } else {
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
    if (primeCheck(x) == true && primeCheck(reverseNumber) == true) {
        console.log("Reverse found:" + x)
    } else {
    }
} 
