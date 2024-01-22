// import Hero from "./class/Hero";
import {Heroe} from './interfaces/heroes';
import { genericArrowFunction, genericFunction, printObject } from './genericos/generics';
import { Villian } from './interfaces/villian';

// const iroman = new Hero('Iroman', 45, 1);

// console.log({iroman});
// console.log(iroman.power);

// console.log(printObject(123));
// console.log(printObject(new Date()));
// console.log(printObject({a:1}));
// console.log(printObject([1,2,3,4,5,6,7,8,9,10]));

// const name: string = 'Tony';

// console.log(genericFunction(123).toFixed(2));
// console.log(genericFunction(new Date().getDate()));
// console.log(genericFunction(name).toUpperCase());

// console.log(genericArrowFunction(123) * 1000 / 100);


const deadPool= {
    name: 'DeadPool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 100
}

console.log(genericArrowFunction<Villian>(deadPool).dangerLevel);
