export const schema = `#graphql

    type User {
        _id: ID!,
        name: String,
        email: String,
        password: String,
    }

    type Movie {
        _id: ID!,
        plot: String,
        genres: [String],
        runtime: Int,
        cast: [String],
        num_mflix_comments: Int,
        poster: String,
        title: String,
        fullplot: String,
        languages: [String],
        released: String,
        directors: [String],
        writers: [String],
        awards: Awards,
        lastupdated: String,
        year: Int,
        imdb: IMDB,
        countries: [String],
        type: String,
        tomatoes: Tomatoes
    }

    type Awards {
        wins: Int,
        nominations: Int,
        text: String
    }

    type IMDB {
        rating: Float,
        votes: Int,
        id: Int
    }

    type Viewer {
        rating: Float,
        numReviews: Int
    }

    type Tomatoes {
        viewer: Viewer,
        production: String,
        lastUpdated: String
    }

    type Comment {
        _id: ID!,
        name: String,
        email: String,
        movie_id: Movie,
        text: String,
        date: String
    }

    type Query {
        users: [User],
        movies: [Movie],
        movie(id: ID!): Movie,
        comments: [Comment]
        comment(id: ID!): Comment
    }
`;