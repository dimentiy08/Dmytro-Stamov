

const formElements = document.querySelector('.form-f')
const firstName = document.getElementById('first-name')
const inputsAll = document.querySelectorAll('.form-f  input ')
const intextAreaAll = document.querySelectorAll('.form-f  textarea ')





function validateFirstNameInput(input) {
const firstNameRegex = /^[A-Z][a-zA-Z'-]*$/;
const errorElem = input.nextElementSibling
let inputText = input.value
	if(firstNameRegex.test(inputText)) {
		input.classList.remove('is-invalid')
		errorElem.textContent = ''
		input.classList.add('is-valid') 
	} else if (inputText.length === 0 || inputText.length < 1 || inputText.length > 50) {
		input.classList.add('is-invalid')
		errorElem.textContent = 'The First name field must be 1-50 characters and not empty'
		console.log(errorElem);
	} else {

		input.classList.add('is-invalid')
		errorElem.textContent = 'Invalid first name input'
		console.log(errorElem);
	}
}



function validateTelInput(input) {
	const phoneRegex = /^\+380\d{9}$/
	const errorElem = input.nextElementSibling
	let inputText = input.value

	if(phoneRegex.test(inputText)) {
		input.classList.remove('is-invalid')
		errorElem.textContent = ''
		input.classList.add('is-valid') 
	} else {
		input.classList.add('is-invalid')
		errorElem.textContent = 'Invalid telephone number'
		console.log(errorElem);
	}
}


function validateEmailInput(input) {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	const errorElem = input.nextElementSibling
	let inputText = input.value
	if(emailRegex.test(inputText)) {
		input.classList.remove('is-invalid')
		errorElem.textContent = ''
		input.classList.add('is-valid') 
	} else {
		input.classList.add('is-invalid')
		errorElem.textContent = 'Email must contain @ and a dot.'
		console.log(errorElem);
	}
}


function validateTextarea(input) {
	const messageRegex = /^.{5,}$/;
	const errorElem = input.nextElementSibling
	let inputText = input.value
	if(messageRegex.test(inputText)) {
		input.classList.remove('is-invalid')
		errorElem.textContent = ''
		input.classList.add('is-valid') 
	} else {
		input.classList.add('is-invalid')
		errorElem.textContent = 'Oops less than 5 characters.'
		console.log(errorElem);
	}
}




function validateInputs(input) {
	switch (input.getAttribute('type') || input.getAttribute('name')) {
		case 'text':
			validateFirstNameInput(input)
			break;
		
		case 'tel':
			validateTelInput(input)
			break;

		case 'email':
			validateEmailInput(input)
			break;

		case 'message':
			validateTextarea(input)
			break;
				
		default:
			break;
	}
}



formElements.addEventListener('submit', (e) => {
	e.preventDefault()
	console.log(e)
	console.log(inputsAll, intextAreaAll)


	inputsAll.forEach((input) => {
		console.log(input.value)
		validateInputs(input)
	})

	intextAreaAll.forEach((input) => {
		console.log(input.value)
		validateTextarea(input)
	})
})