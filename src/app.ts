import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import os from "os";
import cors from "cors";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

const app = express();

app.use(express.json());
app.use(cors());

// All Routers
app.use("/api/v1", router);

// Test Route
app.get("/", (req: Request, res: Response) => {
  const currentDateTime = new Date().toISOString();
  const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const serverHostname = os.hostname();
  const serverPlatform = os.platform();
  const serverUptime = os.uptime();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Welcome to Tour Management system backend",
    version: "1.0.0",
    clientDetails: {
      ipAddress: clientIp,
      accessedAt: currentDateTime,
    },
    serverDetails: {
      hostname: serverHostname,
      platform: serverPlatform,
      uptime: `${Math.floor(serverUptime / 60 / 60)} hours ${Math.floor(
        (serverUptime / 60) % 60,
      )} minutes`,
    },
    developerContact: {
      email: "hzaman.live@gmail.com",
      website: "https://hzaman.vercel.app",
    },
  });
});

// Global Error Handler
app.use(globalErrorHandler);

// Not Found Route
app.use(notFound);

export default app;
