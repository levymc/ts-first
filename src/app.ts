import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './index.routes';
import cors from 'cors'


dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at http://localhost:${process.env.PORT}`);
});
