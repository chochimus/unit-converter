import express, { type Express, type Request, type Response } from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app: Express = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, './public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req: Request, res: Response) => {
  res.render('length');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});