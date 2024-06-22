import mysql from 'mysql2/promise'

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.P_PORT,
    waitForConnections: process.env.WAIT_FOR_CONNECTIONS,
    connectionLimit: process.env.CONNECTION_LIMIT,
    queueLimit: process.env.QUEUE_LIMIT
})

export default pool;