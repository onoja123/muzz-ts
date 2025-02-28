import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';

import cookieParser from 'cookie-parser';
import { logger } from './heleprs/logger';

const app: Application = express();


// Middleware
app.use(express.json());

// Use CORS middleware
  /* cors is used to allow cross origin requests */
app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  origin: '*',
  credentials: true,
}));

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({
      success: true,
      data: `Server Live${process.env.NODE_ENV === "production" ? "" : ` - ${process.env.NODE_ENV}`}`,
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});


// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
});

export default app;