
for (let i = 1; i <= 10; i++) {
	const newDiv = document.createElement('div')
	let factor = 10
	let result = i * factor
	newDiv.textContent = `${i} * 10 = ${result}` 
	const parentElement = document.querySelector('.container');
	parentElement.appendChild(newDiv)
}