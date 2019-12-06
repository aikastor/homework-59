import React, {Component} from 'react';

class Movie extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.movieName !== nextProps.movieName;
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.props.onChange}
                value={this.props.movieName}/>
                <button onClick={this.props.deleteMovie}>x</button>
            </div>
        );
    }
}

export default Movie;