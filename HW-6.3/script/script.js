const removeElement = (array, item) => {
	let result = array.filter((elem) => {
		return elem !== item
	})
	console.log(result)
}

removeElement([1,2,3,4,5,6,7], 1)