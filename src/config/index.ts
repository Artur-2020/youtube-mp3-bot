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
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT as string) || 5432,
    database: process.env.DB_NAME || 'my_database',
    username: process.env.DB_USER || 'my_user',
    password: process.env.DB_PASSWORD || 'my_password',
};
