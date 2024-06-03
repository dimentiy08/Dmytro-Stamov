let myNumber = parseInt(prompt('Type your number'));

// Check if the number is prime
let isPrime = true;

if (myNumber <= 1) {
    console.log('It’s not a prime number');
} else if (myNumber === 2) {
    console.log(myNumber + ' is a prime number');
} else if (myNumber % 2 === 0) {
    console.log(myNumber + ' is not a prime number');
} else {
    for (let i = 3; i <= myNumber / 2; i += 2) {
        if (myNumber % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(myNumber + ' is a prime number');
    } else {
        console.log(myNumber + ' is not a prime number');
    }
}
