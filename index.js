import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
const corsOptions = {
  // origin: 'http://localhost:3000',
  origin: 'https://memoriesbyabubakar.vercel.app/',
};
app.use(cors(corsOptions));

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`server running on: ${PORT}`)))
  .catch((error) => console.log(error.message));
