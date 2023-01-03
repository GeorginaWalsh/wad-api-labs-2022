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
    return <>
        <h2>Upcoming Movies Data </h2>
        <div>
            <ul>
                {context.upcomingMovies.results.map(upcomingMovie => { return <li>{upcomingMovie.id},{upcomingMovie.title}<br /></li> })}
            </ul>
        </div>
    </>
}


 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            <ul>
            {context.movies.results.map(movie => { return <li>{movie.id},{movie.title}<br /></li> })}
            </ul>
        </div>
    </>
}
 

export const Tvs = () => {
    const context = useContext(TvsContext);
    return <>
        <h2>Tv Series Data </h2>
        <div>
        <ul>
            {context.tvs.results.map(tv => { return <li>{tv.id},{tv.name}<br /></li> })}
            </ul>
        </div>
    </>
}
 
export const Actors = () => {
    const context = useContext(ActorsContext);
    return <>
        <h2>Actor Data </h2>
        <div>
        <ul>
            {context.actors.results.map(actor => { return <li>{actor.id},{actor.name}<br /></li> })}
            </ul>
        </div>
    </>
}