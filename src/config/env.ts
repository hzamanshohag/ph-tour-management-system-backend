import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  NODE_ENV: "development" | "production";
  PORT: string;
  DB_URL: string;
}

const loadEnvVariables = ():EnvConfig =>{
    const requiredEnvVariables:string[]=["PORT","DB_URL","NODE_ENV"]

    requiredEnvVariables.forEach(key =>{
        if(!process.env[key]){
            throw new Error (`Missing require environment vatiable ${key}`)
        }
    })

    return {
      NODE_ENV: process.env.NODE_ENV as "development" | "production",
      PORT: process.env.PORT as string,
      DB_URL: process.env.DB_URL as string,
    };
}

export const envVars = loadEnvVariables()
