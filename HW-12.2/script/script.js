document.addEventListener('DOMContentLoaded', function () {
	const container = document.querySelector('.container')
	let button 
	let i
	const createButton = () => {
					button = document.createElement('button')
					button.classList.add('btn', 'btn-primary')
					container.append(button)
					return button
	}
	
	for (i = 1; i <= 3; i++) {
		createButton()
		button.textContent = `button ${i}`
	}

	let containerE = document.querySelectorAll('.container')

	containerE.forEach(containerE => {
		containerE.addEventListener('click', function(e) {
			console.log(`You clicked on ${e.target.textContent}`);
		})
	});
})

