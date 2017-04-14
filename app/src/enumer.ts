/**
 * monuments
 */ 

export enum VehicleType {
    PedalCycle,
    MotorCycle,
    Car
}
export enum VehicleType {
    Van = 3,
    Bus,
    Lorry
}

export enum Tristate {
    False, //default = 0
    True,
    Unknown
}

export enum DiscFlags {
        None = 0,
        Drive = 1 << 0,
        Influence = 1 << 1,
        Steadiness =  1 << 2,
        Conscientiousness = 1 << 3,
        ALL = Drive | Influence | Steadiness | Conscientiousness,
}

export function printAnimalAbilities(animal) {
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

