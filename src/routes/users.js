import express from 'express'
import pool from '../config/pool.js'

const router = express();

router.get('/', async (req, res) => {
    let connections;
    try {
        connections = await pool.getConnection();
        const sql = 'SELECT * FROM users';
        const [error, rows, fields] = pool.query(sql);
        console.log(error);
        console.log(rows);
        console.log(fields);
        res.status(200).json(rows);
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.status(500).json(error);
    } finally {
        if (connections) connections.release();
    }
})

export default router;