import { Document, Schema } from "mongoose";


export interface Iswipe extends Document {
    _user: Schema.Types.ObjectId | string;
    SwipedOn: string;
    Preference: string;
    CreatedAt: Date
    UpdatedAt: Date;
  }
