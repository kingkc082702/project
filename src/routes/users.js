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

router.post('/', async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const { username, password } = req.body;
        const sql = 'INSERT INTO users (username, password) VALUES (?,?)';
        const values = [username, password];
        const [result, fields] = await pool.execute(sql, values);
        console.log(result);
        console.log(fields);
        res.status(201).json(result);
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.status(500).json(error);
    } finally {
        if (connection) connection.release();
    }
})

router.put('/:id', async (req, res) => {
    let connection;
    try {
        connection = await pool.getConnection();
        const id = parseInt(req.params.id);
        const { username, password } = req.body;
        if (isNaN(id)) res.status(400).json({ int: false, msg: "Is not a number." });
        const sql = 'UPDATE users SET username = ?, password = ? WHERE id = ?';
        const values = [username, password, id];
        const [result, fields] = await pool.execute(sql, values);
        console.log(result);
        console.log(fields);
        res.status(200).json(result);
    } catch (error) {
        console.error(`ERROR: ${error}`);
        res.status(500).json(error);
    } finally {
        if (connection) connection.release();
    }
})

export default router;