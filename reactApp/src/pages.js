import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import { UpcomingMoviesContext } from './upcomingMoviesContext';
import { TvsContext } from './tvsContext';
import { ActorsContext } from './actorsContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
}

 export const Profile = () => {
    return <h2>My Profile </h2>
}

 export const HomePage = () => {
     return  <h2>Home page</h2>
 }



 export const UpcomingMovies = () => {
    const context = useContext(UpcomingMoviesContext);
    return <body>
        <h2>Upcoming Movies Data </h2>
        <div>
            <ul>
                {context.upcomingMovies.results.map(upcomingMovie => 
                    { return <li>
                        Name: {upcomingMovie.title}<br />
                        TMDB ID: {upcomingMovie.id}<br/>
                        Popularity: {upcomingMovie.popularity}
                        </li> 
                    })}
            </ul>
        </div>
    </body>
}


 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <body>
        <h2>Movies Data </h2>
        <div>
            <ul>
            {context.movies.results.map(movie => 
            { return <li>
                Name: {movie.title}<br />
                TMDB ID: {movie.id}<br/>
                Popularity: {movie.popularity}
                </li> 
            })}
            </ul>
        </div>
    </body>
}
 

export const Tvs = () => {
    const context = useContext(TvsContext);
    return <body>
        <h2>Tv Series Data </h2>
        <div>
        <ul>
            {context.tvs.results.map(tv => 
                { return <li>
                    Name: {tv.name}<br />
                    TMDB ID: {tv.id}<br/>
                    Popularity: {tv.popularity}
                    </li> 
                })}
                </ul>
        </div>
    </body>
}
 
export const Actors = () => {
    const context = useContext(ActorsContext);
    return <body>
        <h2>Actor Data </h2>
        <div>
        <ul>
            {context.actors.results.map(actor => 
                { return <li>
                    Name: {actor.name}<br />
                    TMDB ID: {actor.id}<br/>
                    Popularity: {actor.popularity}
                    </li> 
                })}
                </ul>
        </div>
    </body>
}