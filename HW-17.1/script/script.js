class Calculator {
	constructor(a, b) {
		this.a = a
		this.b = b
	}

	add(a, b) {
		const result = a + b
		return result
	}
	subtract(a, b) {
		const result = a - b
		return result
	}
	multiply(a, b) {
		const result = a * b
		return result
	}
	divide(a, b) {
		const result = a / b
		return result
	}
 }


 const calc = new Calculator()


 console.log(calc.add(5, 3))
 console.log(calc.subtract(10, 4))
 console.log(calc.multiply(3, 6))
 console.log(calc.divide(8, 2))