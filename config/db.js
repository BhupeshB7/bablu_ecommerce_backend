import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongoDB database ${conn.connection.host}`.cyan);
    } catch (error) {
        console.log(`Error in mongoDB ${error}`.red)
    }
}

export default connectDB;