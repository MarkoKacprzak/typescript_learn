
import App = require('./app');
import Mon = require('./monument');
import Enumer = require('./enumer');
import Clases = require('./clases');

var greeter = new App.Controller('Whatupw 1');

var monuments: Mon.Monument[] = [];
monuments.push({
    name: 'Marek',
    height: 181
    //location: "Poland"
});
monuments.push({
    name: 'Jakub',
    height: 98
});

var sortedMonuments = monuments.sort(Mon.compareMonument);
  console.log(sortedMonuments[0].name);

var type1 = Enumer.VehicleType.Lorry;

var typeName1 = Enumer.VehicleType[type1];

console.log(typeName1);
var sss = Enumer.DiscFlags.Influence | Enumer.DiscFlags.Drive | Enumer.DiscFlags.Influence;

var personality = new Enumer.printAnimalAbilities(Enumer.DiscFlags.Drive);
console.log(sss[sss]);

console.log('Enumerator Tristate:');
console.log(Enumer.Tristate[0]); // "False"
console.log(Enumer.Tristate['False']); // 0
console.log(Enumer.Tristate[Enumer.Tristate.False]); // False Tristate.False=0

console.log('Greet:');
greeter.greet();

console.log('Classes:');
var point = new Clases.Point(10, 12);
var point3d = new Clases.Point3d(10, 12, 14);
var point3dNextOne = new Clases.Point3d(0, 0, 2);
point.log(); 
point3d
    .add(point3dNextOne)
    .log();

var someArray = ['12', '123', '123'];
for (var item in someArray) {
    console.log(item); // 0,1,2
}
for (var item11 of someArray) {
    console.log(item11); // 9,2,5
}
var lyrics = 'Never gonna give you up';
console.log( `<div>${lyrics}</div>`);
