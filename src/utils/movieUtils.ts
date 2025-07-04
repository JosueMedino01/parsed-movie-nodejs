import { strict } from 'assert';
import { IAward, IDetailMovie, IMovie, ISynopsis, Rating } from './../models/movie';
import { WordNumberUtils } from './wordNumberUtils';

export class MovieUtils {
    private static utils = WordNumberUtils;

    public static getFormatted(detailMovie: IDetailMovie): IMovie {
        return {
            titulo: detailMovie.titulo,
            ano: detailMovie.ano,
            diretor: detailMovie.diretor,
            duracaoSegundos: detailMovie.duracao * 60,
            genero: detailMovie.genero,
            sinopse: this.getSynopsis(detailMovie.sinopse),
            lucro: this.getProfit(detailMovie).toString(),
            maiorPremiacao: this.getBetterAward(detailMovie.premios),
            notaIMDb: this.getIMDbEvaluation(detailMovie.ratings)
        }
    }

    private static getProfit(detailMovie: IDetailMovie) {
        const profit =  this.utils.getNumber(detailMovie.bilheteria) - this.utils.getNumber(detailMovie.orcamento);
        return this.utils.getWord(profit);
    }

    private static getSynopsis(synopsisList: ISynopsis[]) {
        let englishText: string | null = null;

        for (let synopsis of synopsisList) {
            if(synopsis.idioma == "pt-br") 
                return synopsis.texto;

            if(synopsis.idioma == "en") 
                englishText = synopsis.texto;
        }

        return (englishText) ? englishText : synopsisList[0].texto;
    }

    private static getBetterAward(awards: IAward[]) {
        let betterEvaluation = -1;
        let betterIndex= -1

        awards.forEach((award, index) => {
            if(award.relevancia > betterEvaluation){
                betterEvaluation = award.relevancia;
                betterIndex = index;
            }    
        });

        return awards[betterIndex].nome;
    }

    private static getIMDbEvaluation(ratingList: Rating[]){
        const foundRating = ratingList.find(e => e.fonte == "IMDb");
        return foundRating?.valor ?? 0;
    }
}
