import { Router } from 'express';
import { getParsedMovieList } from '../controller/movieController';


const router = Router();

router.get('/', getParsedMovieList);


export default router;