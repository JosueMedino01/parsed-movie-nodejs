import express from 'express';
import movieRoutes from './routes/movieRoutes'

const app = express();

app.use(express.json());

app.use('/filmes', movieRoutes);

export default app;