
document.addEventListener('DOMContentLoaded', function () {
	const carusel = document.querySelector('.carusel')
	const nextButton = document.querySelector('.next')
	const prevButton = document.querySelector('.prev')
	const bulletContainer = document.createElement('div')
	bulletContainer.classList.add('bullet-container')
	carusel.append(bulletContainer)

	const changeingImages = (offset) => {
			const activeSlide = document.querySelector('[data-active]')
			const allSlides = [...document.querySelectorAll('.slide')]
			const currentIndex = allSlides.indexOf(activeSlide)
			let newIndex = currentIndex + offset

			if (newIndex < 0) newIndex = allSlides.length - 1
			if (newIndex >= allSlides.length) newIndex = 0

			allSlides[newIndex].dataset.active = true
			delete activeSlide.dataset.active

			updateBullets(newIndex)
	}

	const bulletCreator = () => {
			const allSlides = document.querySelectorAll('.slide')

			allSlides.forEach((_, index) => {
					const bullet = document.createElement('div')
					bullet.classList.add('bullet')
					bullet.dataset.index = index
					bullet.addEventListener('click', () => goToSlide(index))
					bulletContainer.append(bullet)
			})

			updateBullets(0)
	}

	const updateBullets = (activeIndex) => {
			const allBullets = document.querySelectorAll('.bullet')
			allBullets.forEach((bullet, index) => {
					if (index === activeIndex) {
							bullet.classList.add('active')
					} else {
							bullet.classList.remove('active')
					}
			})
	}

	const goToSlide = (index) => {
			const activeSlide = document.querySelector('[data-active]')
			const allSlides = [...document.querySelectorAll('.slide')]

			allSlides[index].dataset.active = true
			delete activeSlide.dataset.active

			updateBullets(index)
	}

	bulletCreator()

	nextButton.addEventListener('click', () => {
			changeingImages(1)
	})

	prevButton.addEventListener('click', () => {
			changeingImages(-1)
	})
})