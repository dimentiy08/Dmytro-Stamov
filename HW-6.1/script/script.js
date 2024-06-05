
const textFiltering = (inputText) => {
	const myArr = []
	for (let i = 0; i < inputText.length; i++) {
		if(inputText[i] === 'l' || inputText[i] === 'd'){
		} else {
			myArr.push(inputText[i])
		}
	}
	
	console.log(myArr.join(''));
}

textFiltering('hello world')