const curFunction = (sum) => {
	return function(a) {
		return function(b) {
			return sum(a, b)
		}
	}
}

const sum = (a, b) => {
	return a + b
}

let curSum = curFunction(sum)

console.log(curSum(5)(2))