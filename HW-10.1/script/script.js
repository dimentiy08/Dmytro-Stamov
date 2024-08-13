function Person(name, age, placeOfResidence) {
	this.placeOfResidence = placeOfResidence
	this.name = name
	this.age = age
	this.getDataFunction = function() {
		console.log(`name: ${this.name} \nage: ${this.age} \nplace of residence: ${this.placeOfResidence}`);
	}
}


let user1 = new Person('Dmyto', 35, 'Odessa')
let user2 = new Person('Vlad', 24, 'Charkov')
let user3 = new Person('Yevhen', 35, 'Kiev')
let user4 = new Person('Stanislav', 35, 'Lviv')



user1.getDataFunction()
user2.getDataFunction()
user3.getDataFunction()
user4.getDataFunction()


