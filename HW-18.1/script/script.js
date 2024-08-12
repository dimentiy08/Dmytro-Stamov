
const container = document.querySelector('.container')



	let startSec = 27
	const timer = setInterval(() => {
		let startMin = 1
		let currentData = new Date(false, false, false, false, startMin, startSec)
		const seconds = currentData.getSeconds()
		const minutes = currentData.getMinutes()
		startSec -= 1
		container.innerHTML = `
		<h1>Таймер відліку</h1>
		<div class="time">${minutes}:${seconds}</div>
		`
		if(minutes === 0 && seconds === 0) {
			clearInterval(timer)
		}
	}, 1000);
