//Firtst solition
const whiteSpace = ' '
console.log(`1${whiteSpace}0${whiteSpace}3${whiteSpace}6${whiteSpace}9`)

//second solution
const splitNumber = (number)  => {
	let convertNumber = number.toString()
		let spliterString = convertNumber.split('')
			let result = spliterString.join(' ')

	console.log(result)
}

splitNumber(12345)