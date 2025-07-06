import { Request, Response, NextFunction } from 'express';
import { IDetailMovieList, IMovie } from '../models/movie';
import { MovieService } from '../services/movieService';
import { MovieUtils } from '../utils/movieUtils';

const utils = MovieUtils;
const service = MovieService;

/**
 * Método responsável por formatar/parsear os metadados 
 */
export const getParsedMovieList = (req: Request, res: Response<IMovie[]>, next: NextFunction) => {
    service.getDetailMovieList().then((data: IDetailMovieList) => {
        const movieList: any[] = data.filmes.map(detailMovie => utils.getFormatted(detailMovie));
        res.json(movieList);
    })
    .catch(err => {
        throw new Error(err);
    });
}
