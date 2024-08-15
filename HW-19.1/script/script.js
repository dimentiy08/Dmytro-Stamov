const dataDay = document.querySelector('.day')
const dataYear = document.querySelector('.year')
const timeTo =  document.querySelector('.current-time')
const month =  document.querySelector('.month')
const num =  document.querySelector('.num')
const year =  document.querySelector('.year')
const day =  document.querySelector('.day')
const hours =  document.querySelector('.hours')
const minutes =  document.querySelector('.minutes')
const pressure =  document.querySelector('.pressure-value')
const humidity = document.querySelector('.humidity-value')
const windSpeed = document.querySelector('.wind-speed')
const temperature = document.querySelector('.temperature')
const feelsTemperature = document.querySelector('.feels-value')
const skys = document.querySelector('.sky-value')

let container = document.querySelector('.container')
let weatherIcon = document.querySelector('.weather-icon')
let imagesLink = 'https://download.spinetix.com/content/widgets/icons/weather/'

let apiKey = '088306e2338d15b1275287fadb0ae34d'
let object = []
let city = ['Odessa','Lviv', 'Kharkiv']

function renderWeatherIcon(object) {
	const imapgePath = `${imagesLink}${object}.png`
	console.log(imapgePath);
	weatherIcon.innerHTML = `<img class="weather-icon" src="" alt="">`
	weatherIcon.setAttribute('src', imapgePath)
}



const fetchFn = async (weatherObj) => {
	const getUrl = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city[1]}&lang=ua&appid=${apiKey}`)
	console.log(getUrl)
	const data = await getUrl.json()
	console.log(data)
	const humidityValue = data.main.humidity
	const pressureValue = data.main.pressure
	const windSpeedValue = data.wind.speed
	const temperatureValue = (data.main.temp - 273.15).toFixed()
	const feelsTemperatureValue = (data.main.feels_like - 273.15).toFixed()
	const skyValue = data.weather[0].description

	humidity.textContent = humidityValue + ' %'
	pressure.textContent = ' ' + pressureValue + ' hPa'
	windSpeed.textContent = windSpeedValue
	temperature.textContent = temperatureValue
	feelsTemperature.textContent = feelsTemperatureValue
	skys.textContent = skyValue




	if (data.weather[0].icon !== null && object.length === 0) {
		object.push(data.weather[0].icon)
		renderWeatherIcon(object)
	}
}

fetchFn()

const daysWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const timeC = () => {
	setInterval(() => {
		let currentTime = new Date
		month.textContent = months[currentTime.getMonth()]
		num.textContent = currentTime.getDate() + ','
		year.textContent = currentTime.getFullYear() + ' - '
		day.textContent = daysWeek[currentTime.getDay()]
		hours.textContent = currentTime.getHours()
		minutes.textContent = currentTime.getMinutes()

		if (minutes.textContent.length <= 1) {
			minutes.textContent = '0' + currentTime.getMinutes()
		}

		if (hours.textContent.length <= 1) {
			hours.textContent = '0' + currentTime.getHours()
		}
	},1000)	
}

timeC()	

const seaveUpdate = () => {	
	const month1 =  document.querySelector('.month-1')
	const num1 =  document.querySelector('.num-1')
	const day =  document.querySelector('.day')
	const hours =  document.querySelector('.hours-1')
	const minutes =  document.querySelector('.minutes-1')

	let currentTime = new Date
		month1.textContent = months[currentTime.getMonth()] 
		num1.textContent = currentTime.getDate()
		day.textContent = daysWeek[currentTime.getDay()]
		hours.textContent = currentTime.getHours()
		minutes.textContent = currentTime.getMinutes()

		if (minutes.textContent.length <= 1) {
			minutes.textContent = '0' + currentTime.getMinutes()
		}
		
		if (hours.textContent.length <= 1) {
			hours.textContent = '0' + currentTime.getHours()
		}

		if(hours.textContent >= 23 || !(hours.textContent > 6)) {
			container.classList.add('background')
		} else {
			container.classList.remove('background')
		}
}

const buttonUpdate = document.querySelector('.update-button')

buttonUpdate.addEventListener('click', (e) => {
	console.log(e.target);
	seaveUpdate()
	fetchFn()
	timeC()	
})



