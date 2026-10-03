import { type Request, type Response } from 'express';
import { convertTemperature, isTemperatureUnit } from '../conversions/temperature.ts';

type TemperatureRequest = {
    temperature: string;
    convertFrom: string;
    convertTo: string;
};

function temperaturePost(req: Request<{}, {}, TemperatureRequest>, res: Response) {
    const { temperature, convertFrom, convertTo } = req.body;

    const value = Number(temperature);

    if (
        !Number.isFinite(value) ||
        !isTemperatureUnit(convertFrom) ||
        !isTemperatureUnit(convertTo)
    ) {
        res.status(400).render('temperature', {
            temperature: undefined,
            convertFrom: undefined,
            convertTo: undefined,
            result: undefined,
            error: 'Invalid conversion input.'
        });
        return;
    }

    const result = convertTemperature(value, convertFrom, convertTo);

    res.render('temperature', { temperature, convertFrom, convertTo, result });
}

export { temperaturePost };