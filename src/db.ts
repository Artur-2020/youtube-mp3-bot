import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || 'my_database',
    username: process.env.DB_USER || 'my_user',
    password: process.env.DB_PASSWORD || 'my_password',
    logging: false, // Disable SQL logging for cleaner output
});

// Test connection
export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');

        await sequelize.sync({ alter: true });

        console.log('Models synchronized.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit if the database connection fails
    }
}

// Initialize the database when the app starts
