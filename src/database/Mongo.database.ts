import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path: '.env'});

export class MongoConnection {    
    public async connect(): Promise<void>{
        const uri = process.env.DB_CONN_STRING;
        const database = process.env.DB_NAME;
        const databasePort = process.env.DB_PORT;
        try {
            await mongoose.connect(`${uri}/${database}`);
            console.log(`Database connected PORT ${databasePort}`);
        } catch (error) {
            console.error({mensage: error});
            process.exit(1);            
        }
    }
}
