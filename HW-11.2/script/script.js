const button = document.querySelector('.btn-new')
console.log(button);

if(button) {
	button.addEventListener('click', function(event) {
		event.target.classList.toggle('active-btn')
	})
}