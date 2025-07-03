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

export interface IDetailMovieList {
  filmes: IDetailMovie[]
}

export interface IDetailMovie {
  titulo: string
  diretor: string
  ano: number
  genero: string[]
  duracao: number
  ratings: Rating[]
  elenco: string[]
  sinopse: ISynopsis[]
  poster: string
  trailer: string
  locacoes: string[]
  orcamento: string
  bilheteria: string
  premios: IAward[]
}

export interface Rating {
  valor: number
  fonte: string
}

export interface ISynopsis {
  texto: string
  idioma: string
}

export interface IAward {
  nome: string
  relevancia: number
}
