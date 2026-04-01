import express, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import os from "os";

const app = express();

// Test route
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.get("/", (req: Request, res: Response, next: NextFunction) => {
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


export default app;
