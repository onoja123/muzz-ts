import mongoose from "mongoose";
import { logger } from "../heleprs/logger";

const DB_URL: string = process.env.DB_URL || '';

const connectToDatabase = async () =>{
    try {
        await mongoose.connect(DB_URL)
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error('Error connecting to MongoDB:', error);

    if (error instanceof mongoose.Error) {
        logger.error('MongoDB Connection Error:', error.message);

        setTimeout(() => {
			logger.info('Retrying connection...');
          connectToDatabase();
        }, 3000);
      } else {

        logger.error('Other Error:', error);

      }
    }
}

export default connectToDatabase;

// mongodb://localhost:27017/dispatch