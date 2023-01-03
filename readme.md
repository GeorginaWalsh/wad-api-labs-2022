# Assignment 2 - Web API.
​
Name: Georgina Walsh (20093147)
​
## Features.
​
 + Update Movies Page - The movies page will read from TMDB's discover movies api to generate the list.
​
 + Add Upcoming Movies Page - A new page which reads from TMDB's upcoming movies api to generate a list of movies which have just/or are about to be released.
​
+ Add Tv Series Page - A new page which reads from TMDB's top rated tv series api to generate a list of TMDB's most highly rated tv shows.
​
+ Add Actors Page - A new page which reads from TMDB's current popular actors api to generate a list of actors.
​
## Installation Requirements
​
Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 
​
Describe getting/installing the software, perhaps:

To run the API and React App, first the code must be downloaded with:​

```bat
git clone https://github.com/GeorginaWalsh/wad-api-labs-2022
```

MongoDB was used within the assignment, the latest version should be installed and set up. A location for the database must also be created to store any entered data. Within a directory of choice, a new folder must be created and it's path saved:

```bat
mkdir db
mongod -dbpath db
```

Node Package Manager is used for this app/api,  therefore Node and NPM must be installed and set up. Node v16.17.0 and NPM v8.15.0 were used to create the app/api, new versions should still work.


Once finished setting up Node and NPM, all necessary dependancies for the project must be installed:

```bat
npm install
```

NPM was already initialised within the app/api so it doesn't have to be done again. 

To run the API, "npm start" must be run in the movies-api folder, while it must be run in the reactApp folder to run the app.

```bat
npm start
```
​
## API Configuration
The assignment's ``.env`` file won't be saved to git, therefore a new one must be created. The following shows a template of the ``.env`` file used to create the app/api, a new HOST, MONGO_DB, SECRET and TMDB_KEY must be updated to show their new values
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
**REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB,** just placeholders as indicated below:
​
```bat
NODE_ENV=development
#NODE_ENV=production
PORT=8080
HOST=host
MONGO_DB=mongo
SEED_DB=True
SECRET=secret
TMDB_KEY=key
```
​
​
## API Design
Overview of web API design: 
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/movies/upcoming |Gets a list of upcoming movies | N/A | N/A |
| /api/tvs |Gets a list of top rated tv series | N/A | N/A |
| /api/tvs/{tvid} | Get a specific tv series | N/A | N/A | N/A
| /api/tvs/{tvid}/reviews | Get all reviews for a specific tv series | Create a new review for a specific tv series | N/A | N/A  
| /api/actors |Gets a list of popular actors | N/A | N/A |
| /api/actors/{actorid} | Get a specific actor | N/A | N/A | N/A
​
If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).
​
​
## Security and Authentication
The API made use of a JWT-based Authentication strategy. Instead of using sessions and cookies, JSON web tokens are used in every authenticated request, the JWT is kept in localStorage/a frontend location. Passport is used to ckeck for tokens when accessing private routes.

Each of the API location in the table above requires authentication. In order to access the Profile, Movies, Upcoming, Tv Series, and Actors pages on the app, authentication is required, the user will be redirected to a login page if there is no token available.

​
## Integrating with React App
​
The React App was integrated with the API in the following file: 
api-labs/reactApp/src/api/movie-api.js

An example of the code which can me seen within the file can be seen below. When a function is called from this file it will call upon information from a specified location, eg: /api/movies. If the information requires a user to be logged in first to view it, authorization must also be confirmed, this is achieved by retrieving a token from local storage, this token will only be available if a user has logged in.

~~~Javascript
export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };
​
~~~
​
## Extra features
​ 
​
## Independent learning.
​