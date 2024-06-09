
const inputData = ['Dmytro', true, 'some text', ['text', false, 1, 2,], ['two', true, 6], {lastname: 'Stamov', age: 3}, 4, 5]

const mySumFunction = (sumNumber) => {
	let myResult = []
	let result = 0
	for (let i = 0; i < sumNumber.length; i++) {
		if (typeof sumNumber[i] === 'number') {
			myResult.push(sumNumber[i])
		}
		if(Array.isArray(sumNumber[i])) {
			for (let j = 0; j < sumNumber[i].length; j++) {
				if(typeof sumNumber[i][j] === 'number') {
					myResult.push(sumNumber[i][j])
				}
			}
		}
		if(Array.isArray(sumNumber[i]) === false && typeof sumNumber[i] === 'object') {
			for (const key in sumNumber[i]) {
				if(typeof sumNumber[i][key] === 'number') {
					myResult.push(sumNumber[i][key])
				}
			}
		}
	}
	for (let j = 0; j < myResult.length; j++) {
		result += myResult[j]
	}
	console.log(result);
}

mySumFunction(['Dmytro', true, 'some text', ['text', false, 1, 2,], ['two', true, 6], {lastname: 'Stamov', age: 3}, 4, 5])


