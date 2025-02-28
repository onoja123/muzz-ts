import dotenv from "dotenv";
import http from "http";
import app from "./app";
import connectToDatabase from "./database/mongodb";
import { logger } from "./heleprs/logger";
import "./workers";
dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Connect to MongoDB and start the server
connectToDatabase()
	.then(() => {
		logger.info("MongoDB connected");
		server.listen(port, () => {
			logger.info(`Server is running on http://localhost:${port}`);
		});
	})
	.catch((err) => {
		logger.error("Failed to connect to MongoDB:", err);
		logger.error("Failed to start server:", err);
	});
