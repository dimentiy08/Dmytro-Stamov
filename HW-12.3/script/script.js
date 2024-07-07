// Create necessary elements
const submit = document.createElement('input')
const inputToDO = document.createElement('input')
const container = document.querySelector('.container')
const toDoListTitle = document.createElement('h1')
const inputGroupsDiv = document.createElement('div')

// Add classes and attributes to elements
container.classList.add('d-flex', 'justify-content-center', 'flex-column', 'rounded-4', 'w-50', 'p-3', 'bg-light')

toDoListTitle.textContent = 'To-Do List' 
container.prepend(toDoListTitle)

container.append(inputGroupsDiv)
inputGroupsDiv.classList.add('input-group', 'mb-3')

inputGroupsDiv.append(inputToDO)
inputGroupsDiv.append(submit)
inputToDO.classList.add('form-control')
inputToDO.setAttribute('type', 'text')
submit.classList.add('btn', 'btn-outline-secondary', 'h-23')
submit.setAttribute('type', 'submit')
submit.setAttribute('value', 'Add Task')

function addTask() {
    const ulElem = document.createElement('ul')
    ulElem.classList.add('js-ul', 'd-flex', 'justify-content-center', 'align-items-center', 'justify-content-around')
    container.append(ulElem)

    const liElem = document.createElement('li')
    liElem.classList.add('list-group-item')
    ulElem.append(liElem)
    liElem.textContent = inputToDO.value

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('btn', 'btn-danger')
    ulElem.append(deleteButton)
    deleteButton.textContent = 'Delete'

    deleteButton.addEventListener('click', function() {
        ulElem.remove()
    })
}

submit.addEventListener('click', function() {
    const inputValue = inputToDO.value
    if (inputValue.length > 0) {
        addTask()
        inputToDO.value = ''
    }
})
