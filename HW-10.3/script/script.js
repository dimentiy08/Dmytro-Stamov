let personData = {
	userList: [{name: 'Dmytro', tel: '+38093523345', email: 'dmytro@gmail.com'}, {name: 'Alice', tel: '+1234567890', email: 'alice@example.com'}, {name: 'Bob', tel: '+9876543210', email: 'bob@example.com'}, {name: 'Charlie', tel: '+2468013579', email: 'charlie@example.com'},{name: 'David', tel: '+1357924680', email: 'david@example.com'}, {name: 'Eve', tel: '+3692581470', email: 'eve@example.com'}, {name: 'Frank', tel: '+9517538024', email: 'frank@example.com'}, {name: 'Grace', tel: '+7778889990', email: 'grace@example.com'}, {name: 'Henry', tel: '+4445556660', email: 'henry@example.com'}, {name: 'Ivy', tel: '+2223334440', email: 'ivy@example.com'},{name: 'Jack', tel: '+8889990000', email: 'jack@example.com'}],





	findPerson: function(name) {
		for (const key in personData) {
			if (Array.isArray(personData[key])) {
				for (let i = 0; i < personData[key].length; i++) {
					const element = personData[key][i]
					if(element.name === name) {
						return element
					} 
				}
			}
		}
	},
	addPerson: function(name, tel, email) {
		this.userList.push({name, tel, email})
	}
}


personData.addPerson('Eve1', '+2468013579', 'bob@example.com')
personData.addPerson('Eve2', '+2468013579', 'bob@example.com')
personData.addPerson('Eve3', '+246899999579', 'bob@exjjjJple.com')
console.log(personData.findPerson('Eve3'));








