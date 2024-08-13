
let userNumber = parseInt(prompt("Type your number"));


for (let i = 1; i <= 100; i++) {
    if (i * i >= userNumber) {
        break
    }
    console.log(i)
}