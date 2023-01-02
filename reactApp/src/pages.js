import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './moviesContext';
import { UpcomingMoviesContext } from './upcomingMoviesContext';
import { TvsContext } from './tvsContext';

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

            {context.upcomingMovies.results.map(upcomingMovie => { return <>{upcomingMovie.id},{upcomingMovie.title}<br /></> })}
        
        </div>
    </>
}


 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.results.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}
 

export const Tvs = () => {
    const context = useContext(TvsContext);
    return <>
        <h2>Tv Series Data </h2>
        <div>
            {context.tvs.results.map(tv => { return <>{tv.id},{tv.name}<br /></> })}
        </div>
    </>
}
 