import { type Request, type Response } from 'express';
import { convertLength, isLengthUnit } from '../conversions/length.ts';

type LengthRequest = {
    length: string;
    convertFrom: string;
    convertTo: string;
};

function lengthPost(req: Request<{}, {}, LengthRequest>, res: Response) {
    const { length, convertFrom, convertTo } = req.body;

    const value = Number(length);

    if (
        !Number.isFinite(value) ||
        !isLengthUnit(convertFrom) ||
        !isLengthUnit(convertTo)
    ) {
        res.status(400).render('length', {
            length: undefined,
            convertFrom: undefined,
            convertTo: undefined,
            result: undefined,
            error: 'Invalid conversion input.'
        });
        return;
    }

    const result = convertLength(value, convertFrom, convertTo);

    res.render('length', { length, convertFrom, convertTo, result });
}

export { lengthPost };