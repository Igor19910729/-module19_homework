//Задание 1.

const user = {
	имя: 'Igor',
	фамилия: 'Borkovskikh'
}; 

function db(usr) {
	for (let key in usr) {
		
		 if (usr.hasOwnProperty(key)) {

			console.log(`${key}: ${usr[key]}`); 
		};   
	 
	};
	
};
db(user);

//Задание 2.

 function check(str, obj) {
	
	console.log(str in obj);
	
};
check('surname', user);

//Задание 3.

function createObj(obj) {
	let staples = {};
	
	return obj = staples;
  }

  let object = createObj('obj')
  console.log((object));