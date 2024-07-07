document.addEventListener('DOMContentLoaded', function () {
	const container = document.querySelector('.container')
	let button 
	const createButton = () => {
					button = document.createElement('button')
					button.classList.add('btn', 'btn-primary')
					container.append(button)
					return button
	}
	
	for (let i = 1; i <= 3; i++) {
		createButton()
		button.textContent = `button ${i}`
	}
	button.addEventListener('clcik', function() {
		console.log(`click on button ${i}`);
	})
})

