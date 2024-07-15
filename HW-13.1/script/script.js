

const formElements = document.querySelector('.form-f')
const firstName = document.getElementById('first-name')
const inputsAll = document.querySelectorAll('.form-f  input ')
const intextAreaAll = document.querySelectorAll('.form-f  textarea ')


const invalidMessages = {
	firstNameLength: 'The First name field must be 1-50 characters and not empty',
	firstName: 'Invalid first name input',
	phone: 'Invalid telephone number',
	email: 'Email must contain @ and a dot.',
	textAria: 'Oops less than 5 characters'
}



function isValidateFirstNameInput(input) {
	const firstNameRegex = /^[A-Z][a-zA-Z'-]*$/
	let inputText = input.value
	return firstNameRegex.test(inputText)
}



function isValidateTelInput(input) {
	const phoneRegex = /^\+380\d{9}$/
	let inputText = input.value
	return phoneRegex.test(inputText)
}


function isValidateEmailInput(input) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	let inputText = input.value
	return emailRegex.test(inputText)
}


function isValidateTextarea(input) {
	const messageRegex = /^.{5,}$/
	let inputText = input.value
	return messageRegex.test(inputText)
}



function invalidMessage(input, message) {
	const errorElem = input.nextElementSibling
	input.classList.add('is-invalid')
	errorElem.textContent = message
}

function validMessage(input) {
	const errorElem = input.nextElementSibling
	input.classList.remove('is-invalid')
	errorElem.textContent = ''
	input.classList.add('is-valid') 
}



function validateInputs(input) {
	switch (input.getAttribute('type') || input.getAttribute('name')) {
		case 'text':
			if (isValidateFirstNameInput(input)) {
				validMessage(input)
			} else {
				invalidMessage(input, invalidMessages.firstName )
			}
			break;
		case 'tel':
			if (isValidateTelInput(input)) {
				validMessage(input)
			} else {
				invalidMessage(input, invalidMessages.phone )
			}
			break;
		case 'email':
			if (isValidateEmailInput(input)) {
				validMessage(input)
			} else {
				invalidMessage(input, invalidMessages.email )
			}
			break;
		case 'message':
			if (isValidateTextarea(input)) {
				validMessage(input)
			} else {
				invalidMessage(input, invalidMessages.textAria )
			}
			break;
		default:
			break;
	}
}


formElements.addEventListener('submit', (e) => {
	e.preventDefault()


	inputsAll.forEach((input) => {
		console.log(input.value)
		validateInputs(input)
	})

	intextAreaAll.forEach((input) => {
		console.log(input.value)
		validateInputs(input)
	})
})


