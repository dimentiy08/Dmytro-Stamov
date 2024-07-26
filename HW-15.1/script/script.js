

	const addTask = document.getElementById("add-task")
	const form = document.querySelector('.form')
	const ulEl = document.querySelector('.js--todos-wrapper')
	
	const task = JSON.parse(localStorage.getItem('task')) || []
	
	function saveTask() {
		localStorage.setItem('task', JSON.stringify(task))
	}
	
	function renderTask() {
		const getButtonElem = document.querySelectorAll('.todo-item__delete')
		const getCheckerElem = document.querySelectorAll('.checkbox')

		ulEl.innerHTML = ''
		task.forEach((tasks, index) => {
			const liEl = document.createElement('li')
			const checkerEl = document.createElement('input')
			const spanEl = document.createElement('span')
			const button = document.createElement('button')
			
			liEl.classList.add('todo-item')
			spanEl.classList.add('todo-item__description')
			button.classList.add('todo-item__delete')
			checkerEl.classList.add('checkbox')
			
			checkerEl.setAttribute('type', 'checkbox')
			checkerEl.setAttribute('checker-id', index)
			liEl.setAttribute('id', index)
			button.setAttribute('id-button', index)
			button.textContent = 'Delete'
			
			ulEl.append(liEl)
			liEl.append(checkerEl, spanEl, button)
			spanEl.innerHTML = tasks.taskText
		})

		getButtonElem.forEach(buttons => {
			buttons.addEventListener('click', function(e) {
				const curentID = e.target.attributes["id-button"].nodeValue
				console.log(curentID);
				if(e.target.attributes["id-button"].nodeValue) {
					task.splice(curentID, 1)
					saveTask()
					renderTask()
				}
			})
		})

		getCheckerElem.forEach((checker, index) => {
			checker.addEventListener('change', function (e) {
				e.target.classList.toggle('active')
				console.log(e.target.attributes[0].nodeValue)
				const currentChecker = e.target.attributes["checker-id"].nodeValue
				const get = document.getElementById(currentChecker)
				if(e.target.attributes[0].nodeValue === 'checkbox active') {
					get.classList.add('line-through')
				} else {
					get.classList.remove('line-through')
				}
			})
		})
	}	
	
	renderTask()

	form.addEventListener('submit', function(e) {
		e.preventDefault()
	
		const taskText = document.getElementById('task-input').value

		if(task) {
			task.push({taskText})
			document.getElementById('task-input').value = ''
			saveTask()
			renderTask()
		}
	})



