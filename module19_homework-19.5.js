//Задание 5.

class ElectricalAppliance {
	constructor(name) {
		this.device = 'household electrical appliance';
		this.name = name;
	}

	getPowerConsumption (power, t, on) {
		let turnOn = on;
		if(on === 1){
			turnOn = 'Вкл';
		}else{
			turnOn = 'Выкл';
		};
		
	
		console.log(`Расход эл. энергии ${this.name} - (${this.color}) за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
	}

}

class Characteristic extends ElectricalAppliance {
	constructor (name, color) {
		super(name);
		this.color = color;
	}
}

const teapot = new Characteristic ('Teapot', 'black');
const fridge = new Characteristic ('Fridge', 'red');
const luminaire = new Characteristic ('Luminaire', 'green');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(700, 2);
fridge.getPowerConsumption(500, 6, 1);
luminaire.getPowerConsumption(60, 5, 1);