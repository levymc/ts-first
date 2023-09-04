import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();
app.get('/', (req, res) => {
    const response = {
        message: 'Hello World'
    };
    res.json(response);
});
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
