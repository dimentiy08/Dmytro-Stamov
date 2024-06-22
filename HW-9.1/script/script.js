
let company = {
	sales: [{ name: 'John', salary: 1 }, { name: 'Alice', salary: 1 }, { name: 'Toney', salary: 1 }],
	development: {
			web: [{ name: 'John', salary: 1 }, { name: 'John', salary: 1 }, { name: 'John', salary: 1 }],
			internal: [{ name: 'John', salary: 1 }, { name: 'John', salary: 1 }, { name: 'John', salary: 1 }],
			more: {
					hhh: [{ name: 'John', salary: 1 }, [{ name: 'John', salary: 1 }]]
			}
	}
};




function sumSalary(obj) {
	let totalSalary = 0
	for (const key in obj) {
		if (Object.hasOwn(obj, [key])) {
			if(Array.isArray(obj[key])) {
				for (const item of obj[key]) {
					if (Array.isArray(item)) {
						totalSalary += sumSalary(item)
					} else if (typeof item === 'object' && item !== null && 'salary' in item) {
						totalSalary += item.salary
					}
				}
			} else if (typeof obj[key] === 'object' && obj[key] !== null) {
				totalSalary += sumSalary(obj[key])
			}
		} 
	}
	return totalSalary
}


console.log(sumSalary(company));