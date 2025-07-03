export type MovieGenre = "Crime" | "Drama";

export interface IMovie {
    titulo: string,
    ano: number,
    diretor: string,
    genero: MovieGenre[],
    duracaoSegundos: number,
    notaIMDb: number;
    lucro: string;
    maiorPremiacao: string;
    sinopse: string;
}
