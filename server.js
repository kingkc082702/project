import express, { urlencoded } from 'express'
import users from './src/routes/users.js'

const server = express();
const PORT = process.env.S_PORT;

server.use(express.json());
server.use(urlencoded({ extended: false }));

server.use('/api/users', users);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})