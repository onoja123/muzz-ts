import { Document, Schema } from "mongoose";


export interface IswipeMatch extends Document {
    MatchOne: string;
    MatchTwo: string;
    CreatedAt: Date
    UpdatedAt: Date;
  }
