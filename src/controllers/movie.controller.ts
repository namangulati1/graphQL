import { Movie } from '../models/movie.model.js';

export const getAllMovies = async () => {
    const movies = await Movie.find();
    return movies;
}

export const getMovieById =  async (args: { id: string }) => {
    const movie = await Movie.findById(args.id);
    return movie;
}