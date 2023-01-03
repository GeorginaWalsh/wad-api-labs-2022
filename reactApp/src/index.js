import React from "react";
  import ReactDOM from "react-dom";
  import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
  import { PublicPage, Movies, Profile, HomePage, UpcomingMovies, Tvs, Actors } from "./pages";
  import LoginPage from "./loginPage";
  import AuthProvider from "./authContext";
  import PrivateRoute from "./privateRoute";
  import AuthHeader from "./authHeader";
  import SignUpPage from "./signUpPage";
  import MovieProvider from "./moviesContext";
  import UpcomingMovieProvider from "./upcomingMoviesContext";
  import TvProvider from "./tvsContext";
  import ActorProvider from "./actorsContext";
  

  const App = () => {
    return (
      <BrowserRouter>
        <AuthProvider>
          <AuthHeader />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming Movies</Link>
            </li>
            <li>
              <Link to="/tvs">Tv Series</Link>
            </li>
            <li>
              <Link to="/actors">Actors</Link>
            </li>
          </ul>
          <MovieProvider>
          <UpcomingMovieProvider>
            <TvProvider>
              <ActorProvider>
            
          <Switch>
            <Route path="/signup" component={SignUpPage} />
            <Route path="/public" component={PublicPage} />
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/movies" component={Movies} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/upcoming" component={UpcomingMovies} />
            <PrivateRoute path="/tvs" component={Tvs} />
            <PrivateRoute path="/actors" component={Actors} />
            <Redirect from="*" to="/" />
          </Switch>
          
          </ActorProvider>
          </TvProvider>
          </UpcomingMovieProvider>
          </MovieProvider>
        </AuthProvider>
      </BrowserRouter>
    );
  };

  ReactDOM.render(<App />, document.getElementById("root"));