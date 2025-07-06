import { IDetailMovie, IMovie } from "../models/movie";

export const DETAIL_MOVIE_MOCK: IDetailMovie = {
    "titulo": "O Senhor dos Anéis: O Retorno do Rei",
    "diretor": "Peter Jackson",
    "ano": 2003,
    "genero": [
        "Aventura",
        "Fantasia"
    ],
    "duracao": 201,
    "ratings": [
    {
        "valor": 8.9,
        "fonte": "IMDb"
    },
    {
        "valor": 4.8,
        "fonte": "Rotten Tomatoes"
    }
    ],
    "elenco": [
    "Elijah Wood",
    "Viggo Mortensen",
    "Ian McKellen"
    ],
    "sinopse": [
    {
        "texto": "The Fellowship of the Ring prepares for the final battle against Sauron to save Middle-earth.",
        "idioma": "en"
    },
    {
        "texto": "La Communauté de l'Anneau se prépare pour la bataille finale contre Sauron pour sauver la Terre du Milieu.",
        "idioma": "fr"
    }
    ],
    "poster": "link para o poster do filme",
    "trailer": "link para o trailer do filme",
    "locacoes": [
    "Nova Zelândia",
    "Mount Sunday",
    "Tongariro National Park"
    ],
    "orcamento": "$94 milhões",
    "bilheteria": "$1.142 bilhão",
    "premios": [
    {
        "nome": "Oscar de Melhor Filme",
        "relevancia": 10
    },
    {
        "nome": "Oscar de Melhor Direção",
        "relevancia": 9
    }
    ]
}


export const FORMATTED_MOCK: IMovie = {
    "titulo": "O Senhor dos Anéis: O Retorno do Rei",
    "ano": 2003,
    "diretor": "Peter Jackson",
    "duracaoSegundos": 12060,
    "genero": [
        "Aventura",
        "Fantasia"
    ],
    "sinopse": "The Fellowship of the Ring prepares for the final battle against Sauron to save Middle-earth.",
    "lucro": "$1.048 bilhões",
    "maiorPremiacao": "Oscar de Melhor Filme",
    "notaIMDb": 8.9
}
 