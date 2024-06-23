import pool from '../config/config.js'

const User = {
    fetchAll: async () => {
        return pool.query('SELECT * FROM users');
    }
}

export default User;