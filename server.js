import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRote.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors';
//configure env
dotenv.config();
//rest object
const app = express();

//connect db
connectDB();
//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//routes
app.use('/auth', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes)
//rest api
app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>")
})

//PORT
const PORT = 5500;
//run
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bold.blue);
})
