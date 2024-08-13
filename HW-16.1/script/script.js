
let ratingsObj = {
	user1: [100, 78, 100, 55, 45, 91, 83, 74, 100, 30, 88, 90, 92, 85, 100, 100, 99, 80, 95, 86, 81, 70, 93, 100, 100],
	user2: [58, 92, 76, 84, 63, 71, 97, 88, 90, 69, 82, 75, 60, 89, 55, 78, 91, 85, 74, 66, 95, 100, 81, 93, 73],
	user3: [99, 99, 89, 88, 91, 99, 85, 93, 90, 82, 95, 78, 84, 98, 90, 75, 97, 86, 92, 100, 83, 99, 80, 100, 94],

}



function Student (name, surname, bithYear, ratings) {
	this.name = name
	this.surname = surname
	this.bithYear = bithYear
	this.ratings = ratings
	this.attendance = new Array(25)
}


Student.prototype.studentAge = function() {
	let currentYear = new Date().getFullYear()
	const studentAge = currentYear - this.bithYear
	return studentAge
}


Student.prototype.averageScore = function() {
	let result = 0
	this.ratings.forEach((elems) => {
		result += elems
	})
	const finalScore = result / this.ratings.length
	return finalScore
}

Student.prototype.averageAttendance = function() {
	let result = 0
	for (let i = 0; i < this.attendance.length; i++) {
		if (this.attendance[i] === true) {
			++result 
		}
	}
	console.log(result)
	const finalAttendance = result / this.ratings.length
	return finalAttendance
}


Student.prototype.present = function() {
	for (let i = 0; i < this.attendance.length; i++) {
		if (this.attendance[i] === undefined && this.attendance !== false) {
			this.attendance[i] = true
			break;
		}
	}
}

Student.prototype.absent = function() {
	for (let i = 0; i < this.attendance.length; i++) {
		if (this.attendance[i] === undefined && this.attendance !== true) {
			this.attendance[i] = false
			break;
		}
	}
}

Student.prototype.summary = function() {
	if(this.averageScore() >= 90 && this.averageAttendance() >= 0.9) {
		console.log('Молодець')
	} else if(this.averageScore() < 90 && this.averageAttendance() < 0.9) {
		console.log('Редиска!')
	} else if (this.averageScore() < 90 || this.averageAttendance() < 0.9) {
		console.log('Добре, але можна краще')
	}
}


const student_1 = new Student('dmytro', 'stamov', 1986, ratingsObj.user1)
const student_2 = new Student('kate', 'belova', 1989, ratingsObj.user2)
const student_3 = new Student('pitt', 'odom', 1986, ratingsObj.user3)

student_3.present()
student_3.present()
student_3.present()
student_3.absent()
student_3.absent()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()
student_3.present()


console.log(student_3.averageScore())
console.log(student_3.averageAttendance())
student_3.summary()


student_1.present()
student_1.present()
student_1.present()
student_1.absent()
student_1.absent()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()
student_1.present()


console.log(student_1.averageScore())
console.log(student_1.averageAttendance())
student_1.summary()


student_2.present()
student_2.present()
student_2.present()
student_2.absent()
student_2.absent()
student_2.present()
student_2.present()
student_2.present()
student_2.absent()
student_2.absent()
student_2.present()
student_2.present()
student_2.present()
student_2.absent()
student_2.absent()
student_2.present()
student_2.present()
student_2.present()
student_2.absent()
student_2.absent()
student_2.present()
student_2.present()
student_2.present()
student_2.absent()
student_2.absent()
student_2.absent()
student_2.absent()


console.log(student_2.averageScore())
console.log(student_2.averageAttendance())
student_2.summary()