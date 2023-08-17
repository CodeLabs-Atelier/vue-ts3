"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
let profiles = [
    {
        first_name: "Alice",
        last_name: "Carter",
        age: 30,
        account_number: 1111
    },
    {
        first_name: "Bob",
        last_name: "Carter",
        age: 30,
        account_number: 2222
    }
];
router.get('/', (req, res) => {
    res.send('Profiles');
});
router.get('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    let profileWithAccountNumber;
    profileWithAccountNumber = profiles.find(profile => profile.account_number === id);
    if (profileWithAccountNumber !== undefined) {
        res.json(profileWithAccountNumber);
    }
    else {
        res.json({ first_name: "User Not Found", last_name: "User Not Found", age: "User Not Found", account_number: "User Not Found" });
    }
});
exports.default = router;
