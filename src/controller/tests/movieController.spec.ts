/* const MovieController = require('../movieController.ts'); */
import {  Request, Response, NextFunction } from 'express';
import { MovieService } from '../../services/movieService';
import { DETAIL_MOVIE_MOCK, FORMATTED_MOCK } from '../../constants/movie-mock';
import { getParsedMovieList } from '../movieController';
import { MovieUtils } from '../../utils/movieUtils';

let req: Partial<Request>;
let res: Partial<Response>;
let next: NextFunction;

describe('Parsed list', () => {
    beforeEach(() => {
        req = {};
        res = {
            json: jest.fn()
        };
        next = jest.fn();
    });

    it('Should return parsed list', async () => {
        jest.spyOn(MovieService, 'getDetailMovieList').mockResolvedValue({ filmes: [DETAIL_MOVIE_MOCK] });

        await getParsedMovieList(req as Request, res as Response, next);

        expect(res.json).toHaveBeenCalledWith([FORMATTED_MOCK]);
    });


    it('Should call getFormatted for each movie', async () => {

        jest.spyOn(MovieService, 'getDetailMovieList').mockResolvedValue({
        filmes: [DETAIL_MOVIE_MOCK, DETAIL_MOVIE_MOCK, DETAIL_MOVIE_MOCK]
        });

   
        const formatSpy = jest.spyOn(MovieUtils, 'getFormatted').mockReturnValue(FORMATTED_MOCK);

        await getParsedMovieList(req as Request, res as Response, next);

        expect(formatSpy).toHaveBeenCalledTimes(3); 
        expect(res.json).toHaveBeenCalledWith([FORMATTED_MOCK, FORMATTED_MOCK, FORMATTED_MOCK]);

        formatSpy.mockRestore();
    });
})