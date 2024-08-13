// let numOrStr = prompt('input number or string');
// console.log(numOrStr)


// if(numOrStr === null) {
// console.log('ви скасували')
// } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
// console.log(' number is Ba_NaN')
// } else {
// console.log('OK!')
// }

let numOrStr = prompt('input number or string');

switch (true) {
	case numOrStr === null:
		console.log('ви скасували')
		break;

	case numOrStr === '':
		console.log('Empty String')
		break;

	case isNaN(parseInt(numOrStr)):
		console.log(' number is Ba_NaN')
		break;

	default:
		console.log('OK!')
		break;
}