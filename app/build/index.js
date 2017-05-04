"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var App = require("./app");
var Mon = require("./monument");
var Enumer = require("./enumer");
var Clases = require("./clases");
var greeter = new App.Controller('Whatupw 1');
var monuments = [];
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
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var item11 = someArray_1[_i];
    console.log(item11); // 9,2,5
}
var lyrics = 'Never gonna give you up';
console.log("<div>" + lyrics + "</div>");
function logAccess(obj, prop, desc) {
    var delegate = desc.value;
    desc.value = function () {
        console.log("Wywolanie " + prop + "!");
        return delegate.apply(this, arguments);
    };
}
var MoneySafe = (function () {
    function MoneySafe() {
    }
    MoneySafe.prototype.openSafe = function () {
        console.log('cos');
    };
    return MoneySafe;
}());
__decorate([
    logAccess,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MoneySafe.prototype, "openSafe", null);
var safe = new MoneySafe();
safe.openSafe();
