import { createPool } from 'mysql2/promise';

export const connect = () => {
    const connection = createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PAWD,
        database: process.env.DB_NAME,
        connectionLimit: Number(process.env.DB_LIMIT)
    });
    
    return connection;
}
