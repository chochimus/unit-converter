type WeightUnit = 'milligram' |
'gram' |
'kilogram' |
'ounce' |
'pound';

const CONVERSIONS_FROM = {
    milligram: 0.001,
    gram: 1,
    kilogram: 1000,
    ounce: 28.349500000294000301,
    pound: 453.592000004704,
}

const CONVERSIONS_TO = {
    milligram: 1000,
    gram: 1,
    kilogram: 0.001,
    ounce: 0.035274,
    pound: 0.0022046249999752,
}

function isWeightUnit(value: string): value is WeightUnit {
    return Object.hasOwn(CONVERSIONS_FROM, value);
}

function convertWeight(value: number,from: WeightUnit, to: WeightUnit) {
    return value * CONVERSIONS_FROM[from] * CONVERSIONS_TO[to];
}

export { convertWeight, isWeightUnit };