
const sumCounter = (sum) => {
	let counter = 0
	return function(sum) {
		return counter += sum
	}
}


let newCounter = sumCounter()
console.log(newCounter(4));
console.log(newCounter(6));
console.log(newCounter(10));
console.log(newCounter(7));
