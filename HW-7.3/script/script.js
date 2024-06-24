

const myFn = () => {
	let promptQustion
	let i = 0
	for (i; i < 10; i++) {		
		promptQustion = prompt('Type number greater than 100')
		if(+promptQustion < 100) {
			continue;
		}
		else if(+promptQustion > 100 || isNaN(+promptQustion)) {
			console.log(promptQustion)
			break;
		}
	}
	if(promptQustion < 100) {
		console.log(promptQustion)
	}
}

myFn()