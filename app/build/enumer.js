"use strict";
/**
 * monuments
 */
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["PedalCycle"] = 0] = "PedalCycle";
    VehicleType[VehicleType["MotorCycle"] = 1] = "MotorCycle";
    VehicleType[VehicleType["Car"] = 2] = "Car";
})(VehicleType = exports.VehicleType || (exports.VehicleType = {}));
(function (VehicleType) {
    VehicleType[VehicleType["Van"] = 3] = "Van";
    VehicleType[VehicleType["Bus"] = 4] = "Bus";
    VehicleType[VehicleType["Lorry"] = 5] = "Lorry";
})(VehicleType = exports.VehicleType || (exports.VehicleType = {}));
var Tristate;
(function (Tristate) {
    Tristate[Tristate["False"] = 0] = "False";
    Tristate[Tristate["True"] = 1] = "True";
    Tristate[Tristate["Unknown"] = 2] = "Unknown";
})(Tristate = exports.Tristate || (exports.Tristate = {}));
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
    DiscFlags[DiscFlags["ALL"] = 15] = "ALL";
})(DiscFlags = exports.DiscFlags || (exports.DiscFlags = {}));
function printAnimalAbilities(animal) {
    var animalFlags = animal;
    if (animalFlags & DiscFlags.Drive) {
        console.log('animal has Drive');
    }
    if (animalFlags & DiscFlags.Influence) {
        console.log('animal can Influence');
    }
    if (animalFlags === DiscFlags.None) {
        console.log('nothing');
    }
}
exports.printAnimalAbilities = printAnimalAbilities;
