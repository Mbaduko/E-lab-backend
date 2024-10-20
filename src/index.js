import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import {dbConnection} from './config/config.js';
import routes from './api/routes/index.js'; 
import errorHandler from './middleware/errorHandler.middleware.js'
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

await dbConnection (); // Testing connection before starting server

app.use('/api', routes)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port PORT ${PORT}`));