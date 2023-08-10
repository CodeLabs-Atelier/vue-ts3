import express, { Request, Response } from 'express';
import cors from 'cors';

let app = express()
app.use(cors());
let port = 3000

interface ProfileData {
    firstName: string,
    lastName: string,
    age: number
}
let profile: ProfileData = {
    firstName: "Andrew",
    lastName: "Davis",
    age: 30
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express World!'); // Send a response to the client
});
app.get('/profile', (req: Request, res: Response) => {
    res.json(profile)
})
app.listen(port, () => {
    console.log(`Server Running On: localhost:${port}`)
})