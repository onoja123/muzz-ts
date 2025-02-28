import mongoose from 'mongoose';
import { IswipeMatch } from '../types/interface/SwipeMatch';

const SwipeMatchSchema = new mongoose.Schema<IswipeMatch>(
	{
		MatchOne: {
			type: String,
		},
		MatchTwo: {
			type: String,
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

  const SwipeMatch = mongoose.model<IswipeMatch>('SwipeMatch', SwipeMatchSchema);

  export default SwipeMatch;