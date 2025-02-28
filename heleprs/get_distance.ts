import mongoose from 'mongoose';
import { Iuser } from '../types/interface/user';



export async function getDistance(firstUser: Iuser, secondUser: Iuser): Promise<number> {
  const query = `
    db.runCommand({
      geoNear: "users",
      spherical: true,
      distanceField: "distance",
      query: { _id: { $in: [${firstUser._id}, ${secondUser._id}] } }
    })
  `;

  try {
    if (!mongoose.connection.db) {
      throw new Error('Database connection is not established');
    }
    const result = await mongoose.connection.db.command(JSON.parse(query));
    return result.results[0].distance;
  } catch (err) {
    throw new Error(`Error calculating distance: ${err.message}`);
  }
}