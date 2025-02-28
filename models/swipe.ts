import mongoose from 'mongoose';
import { Iswipe } from '../types/interface/swipe';

const SwipeSchema = new mongoose.Schema<Iswipe>(
	{
		_user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		SwipedOn: {
			type: String,
		},
		Preference: {
			type: String,
			enum: ['like', 'dislike'],
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

  const Swipe = mongoose.model<Iswipe>('Swipe', SwipeSchema);

  export default Swipe;