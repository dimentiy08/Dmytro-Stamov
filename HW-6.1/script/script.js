
// const textFiltering = (inputText, myCheckLetter) => {
// 	const myArr = []
// 	for (let i = 0; i < inputText.length; i++) {
// 		if(inputText[i] !== myCheckLetter.join()){
		
// 		} else {
// 			myArr.push(inputText[i])
// 		}
// 	}
	
// 	console.log(myArr.join(''));
// }

// textFiltering('hello world', ['d', 'l'])




const textFiltering = (inputText, myCheckLetter) => {
	let myArr = []
	for (let i = 0; i < inputText.length; i++) {
		let removeLetter = false
		for (let j = 0; j < inputText.length; j++) {
			if(inputText[i] === myCheckLetter[j]) {
				removeLetter = true
				break;
			} 
		}
		if (!removeLetter) {
			myArr.push(inputText[i])
		}
	}
	console.log(myArr.join(''));
}

textFiltering('hello world', ['d', 'l', 'e', 'o'])