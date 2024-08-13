const CITY = 'City'
const AGE = 'Age'
const FAVORITE_SPORT = 'Favorite Sport'

let userAge 
let userCountry
let userFavoriteSport

//Capitals
const kievCity = 'Kiev'
const countryUkraine = 'Ukraine'
const washingtonCity = 'Washington'
const countryUS = 'USA'
const londonCity = 'London'
const countryUK = 'UK'

//Sports
const basketball = 'basketball'
const football = 'football'
const fomula1 = 'formula 1'

//Athlete
const basketballPerson = 'Kobe Bryant'
const footballPerson = 'Lionel Andrés Messi'
const formula1Person = 'Mika Pauli Häkkinen'

firstQuestion()

function firstQuestion() {
	let yourAge = prompt('type your age ?')
	if(yourAge === '') {
		userAge = `It is a pity that you did not want to type yours ${AGE} :(`
		secondQuestion()
	} else if(yourAge === null) {
		firstQuestion()
	} else if(!(isNaN(yourAge))) {
		userAge = `Your age ${yourAge}`
		secondQuestion()
	} else {
		alert('You was typed not a number value you should use only numbers. Please try again.')
		firstQuestion()
	}
}

function secondQuestion() {
	let yourCountry = prompt('type where you from ?')
	if(yourCountry === '') {
		userCountry = `It is a pity that you did not want to type yours ${CITY} :(`
		theerdQuestion()
	} else if(yourCountry === null) {
		secondQuestion()
	} else if(yourCountry === kievCity) {
		userCountry = `You live in capital ${countryUkraine}.`
		theerdQuestion()
	} else if(yourCountry === washingtonCity) {
		userCountry = `You live in capital ${countryUS}.`
		theerdQuestion()
	} else if(yourCountry === londonCity) {
		userCountry = `You live in capital ${countryUK}.`
		theerdQuestion()
	} else {
		userCountry = `You live in ${yourCountry}.`
		theerdQuestion()
	}
}

function theerdQuestion() {
	let yourFavoriteAthlete = prompt('Type your favorite sport.')

	if(yourFavoriteAthlete === '') {
		userFavoriteSport = `It is a pity that you did not want to type yours ${FAVORITE_SPORT} :(`
	} else if(yourFavoriteAthlete === null) {
		theerdQuestion()
	} else if(yourFavoriteAthlete === basketball) {
		userFavoriteSport = `Cool ! Do you want to be like ${basketballPerson}`
	} else if(yourFavoriteAthlete === football) {
		userFavoriteSport = `Cool ! Do you want to be like ${footballPerson}`
	} else if(yourFavoriteAthlete === fomula1) {
		userFavoriteSport = `Cool ! Do you want to be like ${formula1Person}`
	}
}

alert(`${userAge} \n${userCountry} \n${userFavoriteSport}`)


