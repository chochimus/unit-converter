import { type Request, type Response } from 'express';
import { convertWeight, isWeightUnit } from '../conversions/weight.ts';

type WeightRequest = {
    weight: string;
    convertFrom: string;
    convertTo: string;
};

function weightPost(req: Request<{}, {}, WeightRequest>, res: Response) {
    const { weight, convertFrom, convertTo } = req.body;

    const value = Number(weight);

    if (
        !Number.isFinite(value) ||
        !isWeightUnit(convertFrom) ||
        !isWeightUnit(convertTo)
    ) {
        res.status(400).render('weight', {
            weight: undefined,
            convertFrom: undefined,
            convertTo: undefined,
            result: undefined,
            error: 'Invalid conversion input.'
        });
        return;
    }

    const result = convertWeight(value, convertFrom, convertTo);

    res.render('weight', { weight, convertFrom, convertTo, result });
}

export { weightPost };