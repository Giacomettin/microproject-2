import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
const app = express();

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 3000;


app.use('/api', userRoutes);


const start = async () =>{

    try{
        await connectDB();
        app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        });
    }catch(error){
        console.log(error)
    }
}

start()