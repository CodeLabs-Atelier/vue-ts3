import express, {Request, Response} from 'express';

const router = express.Router();

interface Profile {
    first_name: string,
    last_name: string,
    age: number,
    account_number: number
}
let profiles: Profile[] = [
    {
        first_name: "Alice",
        last_name: "Carter",
        age: 30,
        account_number: 1111
    } as Profile,
    {
        first_name: "Bob",
        last_name: "Carter",
        age: 30,
        account_number: 2222
    } as Profile
]

router.get('/', (req: Request, res: Response) => {
    res.send('Profiles')
})
router.get('/:id', (req: Request, res: Response) => {
    let id: number = parseInt(req.params.id)
    let profileWithAccountNumber: Profile | undefined;
    
    profileWithAccountNumber = profiles.find(profile => profile.account_number === id);
    
    if(profileWithAccountNumber !== undefined) {
        res.json(profileWithAccountNumber);
    }
    else {
        res.json({ first_name: "User Not Found", last_name: "User Not Found", age: "User Not Found", account_number: "User Not Found"})
    }
})

export default router;