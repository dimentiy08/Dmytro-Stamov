document.addEventListener('DOMContentLoaded', function () {

	const container = document.querySelector('.container')
	const promptTextButton = 'Type your URL'
	const redirectTextButton = 'Navigate to'
	
	
	let myPrompt
	let urlPath

	const selector = {
		promptSelector: 'prompt-button',
		redirectSelector: 'redirect-button'
	}

	const createButtons = (nameButton, selector) => {
		const button = document.createElement('a')
		button.classList.add('btn', 'btn-primary', selector)
		button.textContent = nameButton
		button.setAttribute('href', "#")
		container.append(button)
	}

	function callPrompt() {
		myPrompt  = prompt('type your URL')
		urlPath = `https://${myPrompt}`
	}

	createButtons(promptTextButton, selector.promptSelector)
	createButtons(redirectTextButton, selector.redirectSelector)

	const promptButton = document.querySelector(`.${selector.promptSelector}`)
	const redirectButton =  document.querySelector(`.${selector.redirectSelector}`)


	promptButton.addEventListener('click', function() {
		callPrompt()
		redirectButton.setAttribute('href', urlPath)
		redirectButton.textContent = `Navigate to ${myPrompt}`
		if(redirectButton.textContent === 'Navigate to null') {
			redirectButton.textContent = redirectTextButton
		}
	})

	redirectButton.addEventListener('click', function() {
		if(redirectButton.getAttribute('href') === "#" || redirectButton.getAttribute('href') === "https://null" || redirectButton.getAttribute('href') === "https://undefined" || redirectButton.getAttribute('href') === "https://" ) {
			redirectButton.setAttribute('href', '#')
		}
	})
})
