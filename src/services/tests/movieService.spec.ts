import { DETAIL_MOVIE_MOCK } from "../../constants/movie-mock";
import { MovieService } from "../movieService";

describe("Movie service", () => {

    beforeEach(() => {
        global.fetch = jest.fn();
    });

    it('Should return successfull', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(DETAIL_MOVIE_MOCK),
        });

        const data = await MovieService.getDetailMovieList();
 
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(data).toBe(DETAIL_MOVIE_MOCK);
    });

    it('Should return error', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 500
        });

        const response = await MovieService.getDetailMovieList();

        expect(response).rejects.toThrow("Erro ao extrair metadados");
    });


    afterEach(() => {
        jest.clearAllMocks();
    });
});
