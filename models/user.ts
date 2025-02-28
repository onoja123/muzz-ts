import mongoose from 'mongoose';
import { Iuser } from '../types/interface/user';

const UserSchema = new mongoose.Schema<Iuser>(
	{
		Name: {
			type: String,
		},
		Email: {
			type: String,
			required: true
		},
		Password: {
			type: String,
			required: true
		},
        Gender: {
			type: String,
			required: true
		},
        Age: {
			type: Number,
			required: true
		},
        Latitude: {
			type: Number,
			 required: true
		},

        Longitude: {
			type: Number,
			required: true
		},
		CreatedAt: {
			type: Date,
			default: Date.now,
		},
		UpdatedAt: {
			type: Date,
			default: Date.now,
		}

	},
	{ strict: false, timestamps: true }
  );

  const User = mongoose.model<Iuser>('User', UserSchema);

  export default User;