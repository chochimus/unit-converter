type LengthUnit = 'miles' |
'yards' |
'feet' |
'inches' |
'kilometers' |
'meters' |
'centimeters' |
'millimeters';

const CONVERSIONS_FROM = {
    miles: 1609.34,
    yards: 0.9144,
    feet: 0.3048,
    inches: 0.0254,
    kilometers: 1000,
    meters: 1,
    centimeters: 0.01,
    millimeters: 0.001
}
const CONVERSIONS_TO = {
    miles: 0.000621371,
    yards: 1.09361,
    feet: 3.28084,
    inches: 39.3701,
    kilometers: 0.001,
    meters: 1,
    centimeters: 100,
    millimeters: 1000
}

function isLengthUnit(value: string): value is LengthUnit {
    return Object.hasOwn(CONVERSIONS_FROM, value);
}

function convertLength(value: number,from: LengthUnit, to: LengthUnit) {
    return value * CONVERSIONS_FROM[from] * CONVERSIONS_TO[to];
}

export { convertLength, isLengthUnit };