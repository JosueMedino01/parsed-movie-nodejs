import { IDetailMovieList, IMovie } from "../models/movie";

export class MovieService {
    private static URL = 'https://tv5hn2gvyijpl76yxlmsy66jwa0nlmxn.lambda-url.us-east-1.on.aws/';

    public static async getDetailMovieList() {
        try {
            const response =  await fetch(this.URL);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            return await response.json() as IDetailMovieList;
        }
        catch {
            throw new Error();
        }
    };

    
}