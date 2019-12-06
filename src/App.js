import React, {Fragment} from 'react';
import MovieTracker from "./Containers/MovieTracker/MovieTracker";
import ChuckJokes from "./Containers/ChuckJokes/ChuckJokes";

const App = () => {
    return (
        <Fragment>
            <MovieTracker/>
            <ChuckJokes/>
        </Fragment>

    );
};

export default App;