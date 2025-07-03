import { Request, Response, NextFunction } from 'express';
import { IMovie } from '../models/movie';

export const getParsedMovieList = (req: Request, res: Response, next: NextFunction) => {
    res.send('Teste');
}


