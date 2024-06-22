import express from 'express'
import pool from '../config/pool.js'

const router = express();

router.get('/', async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const sql = 'SELECT * FROM users';
        const [rows, fields] = await pool.query(sql);
        console.log(rows);
        console.log(fields);
        res.status(200).json(rows);
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.status(500).json(error);
    } finally {
        if (connection) connection.release();
    }
})

export default router;