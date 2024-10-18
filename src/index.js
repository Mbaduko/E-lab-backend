import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {dbConnection} from './config/config.js';
import userRoutes from './api/routes/user.routes.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

await dbConnection (); // Testing connection before starting server

app.use('/api', userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port PORT ${PORT}`));