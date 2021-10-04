function isPrime(x) {
    let j = 0;
    let i = 2;
    if (x === 1) j = 1;
    if (x === 0) j = 1;
    while (i < x) {
        if (x % i === 0) {
            j = 1;
        }
        i++
    }
    if (j === 0) return ('yes')
    else return ('no')

}

// check if the password is hard coded
function isHard(x) {
    let i = x;
    let k = x.toString().length;
    while (k > 0) {
        i= String(i).slice(0,k);
        if (isPrime(i) === 'yes') {
            // i = i / 10 - (i % 10) / 10;
            k--;
        } else return ('no')
    }
    return ('yes')
}

function hardRang(x) {
    let i = 2*(10 ** (x - 1));
    let j = 10 ** x;
    let arr = [];
    while (i < j) {
        if (isHard(i) === 'yes') arr.push(i)
        i++
    }
    return arr;
}
console.log(hardRang(3));
