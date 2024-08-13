const removeElement = (array, item) => {
	let result = array.filter((elem) => {
		return elem !== item
	})
	console.log(result)
}

removeElement([7,3,5,2,1,4,6], 2)