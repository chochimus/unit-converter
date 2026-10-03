type TemperatureUnit = 'celsius' |
'fahrenheit' |
'kelvin';

const TO_CELSIUS = {
    celsius: (num: number) => num,
    fahrenheit: (num: number) => (num - 32) * (5/9),
    kelvin: (num: number) => num - 273.15,
}
const FROM_CELSIUS = {
    celsius: (num: number) => num,
    fahrenheit: (num: number) => (num * (9 / 5)) + 32,
    kelvin: (num: number) => num + 273.15,
}

function isTemperatureUnit(value: string): value is TemperatureUnit {
    return Object.hasOwn(FROM_CELSIUS, value);
}

function convertTemperature(value: number,from: TemperatureUnit, to: TemperatureUnit) {
    return TO_CELSIUS[to](FROM_CELSIUS[from](value));
}

export { convertTemperature, isTemperatureUnit };