import mongoose, { Schema, Document } from 'mongoose';

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface IIMDB {
  rating: number;
  votes: number;
  id: number;
}

interface IViewer {
  rating: number;
  numReviews: number;
}

interface ITomatoes {
  viewer: IViewer;
  production: string;
  lastUpdated: Date;
}

export interface IMovie extends Document {
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  writers: string[];
  awards: IAwards;
  lastupdated: Date;
  year: number;
  imdb: IIMDB;
  countries: string[];
  type: string;
  tomatoes: ITomatoes;
}

const AwardsSchema: Schema = new Schema({
  wins: { type: Number, required: true },
  nominations: { type: Number, required: true },
  text: { type: String, required: true }
});

const IMDBSchema: Schema = new Schema({
  rating: { type: Number, required: true },
  votes: { type: Number, required: true },
  id: { type: Number, required: true }
});

const ViewerSchema: Schema = new Schema({
  rating: { type: Number, required: true },
  numReviews: { type: Number, required: true }
});

const TomatoesSchema: Schema = new Schema({
  viewer: { type: ViewerSchema, required: true },
  production: { type: String, required: true },
  lastUpdated: { type: Date, required: true }
});

const movieSchema: Schema = new Schema({
  plot: { type: String, required: true },
  genres: { type: [String], required: true },
  runtime: { type: Number, required: true },
  cast: { type: [String], required: true },
  num_mflix_comments: { type: Number, required: true },
  poster: { type: String, required: true },
  title: { type: String, required: true },
  fullplot: { type: String, required: true },
  languages: { type: [String], required: true },
  released: { type: Date, required: true },
  directors: { type: [String], required: true },
  writers: { type: [String], required: true },
  awards: { type: AwardsSchema, required: true },
  lastupdated: { type: Date, required: true },
  year: { type: Number, required: true },
  imdb: { type: IMDBSchema, required: true },
  countries: { type: [String], required: true },
  type: { type: String, required: true },
  tomatoes: { type: TomatoesSchema, required: true }
});

export const Movie = mongoose.model<IMovie>('Movie', movieSchema);