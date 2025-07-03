import express from 'express';
import movieRoutes from './routes/movieRoutes'

const app = express();

app.use(express.json());

app.use('/api/movie', movieRoutes);

export default app;