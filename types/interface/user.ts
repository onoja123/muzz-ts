import { Document, Schema } from "mongoose";


export interface Iuser extends Document {
    Name: string;
	Email: string;
	Password: string;
	Gender: string;
	Age: number;
	Latitude: number;
	Longitude: number;
    CreatedAt: Date
    UpdatedAt: Date;
  }
