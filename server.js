import express, { urlencoded } from 'express'
import userRoutes from './src/routes/userRoutes.js'
import errorHandler from './src/middlewares/errorHandler.js';

const server = express();
const PORT = process.env.S_PORT;

server.use(express.json());
server.use(urlencoded({ extended: false }));

server.use('/api/users', userRoutes);

server.use(errorHandler)

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})