/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./config/env";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    
    console.log("Connected to DB!!");

    server = app.listen(envVars.PORT, () => {
      console.log(`Server is listening to port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

/**
 * unhandle rejection error
 * uncaught rejection error
 * signal termination -> sigterm
 */

// unhandle rejection error
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected.. server sutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// Promise.reject(new Error("i forgot to catch this promise"));

// uncaught rejection error
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception detected.. server sutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// throw new Error("I forgot to handle this local error")

// signal termination -> sigterm
// aws or hosting provider give this signal
process.on("SIGTERM", (err) => {
  console.log("SIGTERM signal recieved.. server sutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// manually server off signal
process.on("SIGINT", (err) => {
  console.log("SIGINT signal recieved.. server sutting down..", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
