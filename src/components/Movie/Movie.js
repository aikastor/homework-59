import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.movieName !== nextProps.movieName;
    }

    render() {
        return (
            <li className='Movie'>
                <input type="text" onChange={this.props.onChange}
                value={this.props.movieName}/>
                <button onClick={this.props.deleteMovie}>x</button>
            </li>
        );
    }
}

export default Movie;