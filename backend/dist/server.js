"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let app = (0, express_1.default)();
app.use((0, cors_1.default)());
let port = 3000;
let profile = {
    firstName: "Andrew",
    lastName: "Davis",
    age: 30
};
app.get('/', (req, res) => {
    res.send('Hello, Express World!'); // Send a response to the client
});
app.get('/profile', (req, res) => {
    res.json(profile);
});
app.listen(port, () => {
    console.log(`Server Running On: localhost:${port}`);
});
