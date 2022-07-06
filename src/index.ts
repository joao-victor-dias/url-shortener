
import express, {json} from 'express';
import cors from 'cors';
import { MongoConnection } from './database/Mongo.database';
import router from './routes/routes';
import * as dotenv from 'dotenv';
dotenv.config({path: '.env'});

const api = express();

api.use(express.json());
api.use(cors());

const database = new MongoConnection();
database.connect();

api.use(router);



api.listen(process.env.PORT, () => console.log(`API listening PORT ${process.env.PORT}`));