import React  from 'react';
import MovieTracker from "./Containers/MovieTracker/MovieTracker";
import ChuckJokes from "./Containers/ChuckJokes/ChuckJokes";
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <MovieTracker/>
            <ChuckJokes/>
        </div>

    );
};

export default App;