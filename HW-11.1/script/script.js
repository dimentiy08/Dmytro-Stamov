document.addEventListener('DOMContentLoaded', function() {
	const getBodyTag = document.getElementsByTagName("body")[0]
	getBodyTag.classList.add("body")
	const container = document.createElement("div")
	container.classList.add("container")
	getBodyTag.append(container)
	const getContainer = document.querySelector(".container")
	const columnNumbers = document.createElement("div")
	getContainer.append(columnNumbers)
	columnNumbers.classList.add("columnNumbers")


	for (let i = 1; i <= 10; i++) {

		for (let j = 1; j <= 10; j++) {
				let result = j * i
				const getColumnNumbers = document.querySelector(".columnNumbers")
				console.log(getColumnNumbers);
				const createColumnNumbers = document.createElement("p")
				getColumnNumbers.append(createColumnNumbers)
				createColumnNumbers.classList.add("numbers")
				createColumnNumbers.textContent = result
		}
	}
})

