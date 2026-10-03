import express, { type Express, type Request, type Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as lengthController from './controllers/lengthController.ts';
import * as weightController from './controllers/weightController.ts';

const app: Express = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({ extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: Request, res: Response) => {
  res.redirect('/length');
});

app.get('/length', (req: Request, res: Response) => {
  res.render('length', {length: undefined, convertFrom: undefined, convertTo: undefined, result: undefined});
})

app.post('/length', lengthController.lengthPost);

app.get('/weight', (req: Request, res: Response) => {
  res.render('weight', {weight: undefined, convertFrom: undefined, convertTo: undefined, result: undefined});
})

app.post('/weight', weightController.weightPost);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});