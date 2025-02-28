import { Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { Iuser } from '../types/interface/user';

export default class AuthService {


  static async createSendToken(user: Iuser, statusCode: number, res: Response): Promise<void> {
    const token = this.signToken(user._id as string);

    const expiresIn = process.env.JWT_COOKIE_EXPIRES_IN
      ? Number(process.env.JWT_COOKIE_EXPIRES_IN) * 24 * 60 * 60 * 1000
      : null;

    const cookieOptions: { [key: string]: any } = {
      expiresIn: expiresIn ? new Date(Date.now() + expiresIn) : undefined,
      httpOnly: true,
    };

    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    res.status(statusCode).cookie('jwt', token, cookieOptions).json({
      success: true,
      token,
      data: {
        user,
      },
    });
  }

  static async findUserById(userId: string): Promise<Iuser | null> {
    return User.findById(userId).select('+password');
  }

  static signToken(id: string): string {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY || 'jwt', {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  }

  static async findUserByEmail(email: string): Promise<Iuser | null> {
    const data = await User.findOne({ email }).select('+password');

    return data;
  }

  static async deleteUserById(userId: string): Promise<void> {
    await User.deleteOne({ _id: userId });
  }

  static async createUser(userData: Partial<Iuser>): Promise<Iuser> {
    const newUser = await User.create({
      ...userData,
    });
    return newUser;
  }
}

