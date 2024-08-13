let myNumber = prompt('Type please three digit number')

if(myNumber.length === 3 && !isNaN(myNumber)) {
	let digit1 = myNumber[0]
	let digit2 = myNumber[1]
	let digit3 = myNumber[2]

	console.log(digit1)
	console.log(digit2)
	console.log(digit3)

	if(digit1 === digit2 & digit2 === digit3) {
		console.log('Digit numbers is same')
	} else if(digit1 === digit2 || digit2 === digit3 || digit3 === digit1) {
		console.log('Got a match on the digit')
	} else {
		console.log('No match found')
	}
} else {
	console.log('Not valid values')
}