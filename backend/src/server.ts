import express, { Request, Response } from 'express';
import routes from '../routes/index'
import cors from 'cors';

let app = express();
app.use(cors());
app.use(routes)
let port = 3000;

app.listen(port, () => {
    console.log(`Server Running On: http://localhost:${port}`)
});