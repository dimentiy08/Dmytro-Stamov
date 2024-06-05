
const textFiltering = (inputText) => {
	const myArr = []
	for (let i = 0; i < inputText.length; i++) {
		if(inputText[i] === 'l' || inputText[i] === 'd'){
			console.log(inputText[i]);
		} else {
			myArr.push(inputText[i])
			console.log('false');
		}
	}
	
	console.log(myArr.join(''));
}

textFiltering('hello world')