let arrNumber = [1, 3, 5, 8, 7, 9, 20]


const evenNumber = (arr) => {
	let myArr = []
	for (let i = 1; i < arr.length; i++) {
		if((arr[i] % 2) === 0 ) {
			myArr.push(arr[i])
		}
	}
	return myArr 
}

console.log(evenNumber(arrNumber))