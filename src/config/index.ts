import { config as dotenvConfig } from 'dotenv';
import { join, resolve } from 'path';

const envPath = join(resolve(__dirname, '../../',), '.env');


// Load environment variables from the `.env` file
dotenvConfig({
    path: envPath,
});

const requiredEnvVars = ['BOT_TOKEN'];

requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        throw new Error(`Missing required environment variable: ${varName}`);
    }
});

export const config = {
    botToken: process.env.BOT_TOKEN as string,
};
