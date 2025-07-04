import { DETAIL_MOVIE_MOCK } from '../../constants/detail-movie-mock';
import { IAward, ISynopsis, Rating } from '../../models/movie';
import { MovieUtils } from '../movieUtils';

const utils = MovieUtils;

describe('Movie utils', () => {
    it('Should return pt-br synopsis', () => {
        const mock: ISynopsis[] = [
            { texto: "texto-1", idioma: 'fr' },
            { texto: "texto-2", idioma: 'en' },
            { texto: "texto-3", idioma: 'pt-br' },
            { texto: "texto-5", idioma: 'some-language' }
        ];

        const synopsisReturned = utils.getSynopsis(mock);

        expect(synopsisReturned).toEqual("texto-3");

    });

    it('Should return en synopsis', () => {
        const mock: ISynopsis[] = [
            { texto: "texto-1", idioma: 'fr' },
            { texto: "texto-2", idioma: 'en' },
            { texto: "texto-3", idioma: 'other-language' },
            { texto: "texto-5", idioma: 'some-language' }
        ];

        const synopsisReturned = utils.getSynopsis(mock);

        expect(synopsisReturned).toEqual("texto-2");

    });

    it('Should return disponible synopsis', () => {
        const mock: ISynopsis[] = [
            { texto: "texto-1", idioma: 'fr' },
            { texto: "texto-2", idioma: 'not-english' },
            { texto: "texto-3", idioma: 'other-language' },
            { texto: "texto-5", idioma: 'some-language' }
        ];

        const synopsisReturned = utils.getSynopsis(mock);

        expect(synopsisReturned).toEqual("texto-1");
    });

    it('Should calc profit', () => {
        const mock = DETAIL_MOVIE_MOCK;

        const profit = utils.getProfit(mock);

        expect(profit).toEqual("$1.048 bilhões");
    });

    it('Should better awards', () => {
        const awards: IAward[] = [
            { nome: 'texto-1', relevancia: 6 },
            { nome: 'texto-2', relevancia: 7 },
            { nome: 'texto-3', relevancia: 9 },
            { nome: 'texto-4', relevancia: 1 }
        ];

        const award = utils.getBetterAward(awards);

        expect(award).toBe(awards[2].nome);
    });

    it('Should get IMDb evaluation', () => {
        const rattings: Rating[] = [
            { fonte: 'texto-1', valor: 6.7 },
            { fonte: 'texto-2', valor: 7.9 },
            { fonte: 'texto-3', valor: 9.1 },
            { fonte: 'IMDb', valor: 3.5 }
        ];

        const rattingIMDb = utils.getIMDbEvaluation(rattings);

        expect(rattingIMDb).toBe(rattings[3].valor);
    })

})

