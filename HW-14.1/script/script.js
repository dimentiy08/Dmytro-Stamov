

document.addEventListener('DOMContentLoaded', function () {

	const nextButton = document.querySelector('.next')
	const prevButton = document.querySelector('.prev')
	const allSlides = document.querySelectorAll('.slide')
	const carusel = document.querySelector('.carusel')
	const circleContainer = document.createElement('div')
	circleContainer.classList.add('circle-container')
	carusel.append(circleContainer)



	allSlides.forEach((elem, index) => {
		elem.setAttribute('id', index)
	})
	
	allSlides.forEach((_, index) => {
		const elem = document.createElement('label')
		elem.classList.add(`circle-${index}`, 'circle' )
		circleContainer.append(elem)
		elem.setAttribute('for', index)
	})

	const elem = document.querySelectorAll('.circle')
	
	const circleElem = (forNum) => {
		document.getElementById("next").disabled = false;
		document.getElementById("prev").disabled = false;

		elem.forEach((el) => {
		const activeSlide = document.querySelector('[data-active]')
		el.classList.remove('active')
		elem[forNum].classList.add('active')

		delete activeSlide.dataset.active
		allSlides[forNum].dataset.active = true
		})
	}

	const nextPhoto = (offset) => {
		const allSlides = [...document.querySelectorAll('.slide')]
		const activeSlide = document.querySelector('[data-active]')
		allSlides.forEach(() => {
			let currentIndex = allSlides.indexOf(activeSlide)
			let newIndex = currentIndex + offset
			
			if (newIndex < 0) {
				newIndex = allSlides.length -1
			} 

			if (currentIndex === allSlides.length -1) {
				document.getElementById("next").disabled = true;
			} else if(currentIndex >= 0) {
				document.getElementById("prev").disabled = false;
			}

			allSlides[newIndex].dataset.active = true
			delete activeSlide.dataset.active

			if (newIndex < allSlides.length) {
				circleElem(newIndex)
		}
		})
	}


	const previeousPhoto = (offset) => {
		const allSlides = [...document.querySelectorAll('.slide')]
		const activeSlide = document.querySelector('[data-active]')
		allSlides.forEach(() => {
			let currentIndex = allSlides.indexOf(activeSlide)
			let newIndex = currentIndex - offset
			
			if (newIndex >= allSlides.length) {
				newIndex = 0
			}

			if (currentIndex === 0) {
				document.getElementById("prev").disabled = true;
			} else if (currentIndex <= allSlides.length -1) {
				document.getElementById("next").disabled = false;
			}

			allSlides[newIndex].dataset.active = true
			delete activeSlide.dataset.active
			


			if (newIndex >= 0) {
				circleElem(newIndex);
		}
		})
	}

	carusel.addEventListener('click', (e) => {

		if(e.target === nextButton) {
			nextPhoto(1)
		}

		if(e.target === prevButton) {
			previeousPhoto(1)
		}

		if(e.target) {
			const forNum = e.target.attributes.for.nodeValue
			circleElem(forNum)
		}
	})

	const initialIndex = [...allSlides].findIndex(slide => slide.hasAttribute('data-active'))
	elem[initialIndex].classList.add('active')
})

