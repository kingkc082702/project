import pool from '../config/config.js'
import User from '../models/usersModel.js'

const usersController = {
    getAllUsers: async (req, res, next) => {
        try {
            req.connection = await pool.getConnection();
            const [rows, fields] = await User.fetchAll();
            console.log(rows);
            console.log(fields);
            res.status(200).json(rows);
        } catch (error) {
            next(error);
        } finally {
            if (req.connection) req.connection.release();
        }
    }
}

export default usersController