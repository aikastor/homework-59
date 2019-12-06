import React, {Component} from 'react';
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Movies from "../../components/Movies/Movies";

class MovieTracker extends Component {
    state = {
        movies: [],
        currentMovie: '',
    };
    handleChange = (e)=> {
        this.setState({[e.target.name]: e.target.value});
    };
    addMovie = (e) =>{
        e.preventDefault();
        if (this.state.currentMovie.trim()) {
            let movies = [...this.state.movies];
            movies.push({name: this.state.currentMovie, id: new Date().getTime()});
            this.setState({movies, currentMovie: ''});
        } else{
            alert('Empty input field!')
        }
    };
    deleteMovie = (id)=> {
        const movieIndex = this.state.movies.findIndex(p => p.id === id);
        const movies= [...this.state.movies];
        movies.splice(movieIndex, 1);
        this.setState({movies});
    };
    changeMovieName =(e,id)=> {
        const index = this.state.movies.findIndex(p => p.id === id);
        const movies = [...this.state.movies];
        const movie = {...movies[index]};
        movie.name = e.target.value;
        movies[index] = movie;
        this.setState({movies});
    };
    componentDidMount() {
        const json = localStorage.getItem('movies');
        const movies = JSON.parse(json);

        if(movies) {
            this.setState({movies})
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.movies.length !== this.state.movies.length) {
            const json = JSON.stringify(this.state.movies);
            localStorage.setItem('movies', json);
        }
        const currentState = this.state.movies;
        currentState.forEach((movie, index)=>{
            if(prevState.movies[index] !== movie) {
                const json = JSON.stringify(currentState);
                localStorage.setItem('movies', json);
            }
        })
    }


    render() {
        return (
            <div>
                <AddMovieForm
                    addMovie={(e)=>this.addMovie(e)}
                    onChange={this.handleChange}
                    value={this.state.currentMovie}/>
                {
                    this.state.movies.length > 0 &&

                    <Movies
                        movies={this.state.movies}
                        deleteMovie={this.deleteMovie}
                        changeMovieName={this.changeMovieName}
                    />
                }
            </div>
        );
    }
}

export default MovieTracker;