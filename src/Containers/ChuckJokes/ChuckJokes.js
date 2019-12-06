import React, {Component} from 'react';
import JokeCard from "../../components/JokeCard/JokeCard";
import Button from "../../components/Button/Button";
import './ChuckJokes.css';

class ChuckJokes extends Component {
    state ={
        jokes: []
    };
    async componentDidMount() {
        let promises = [];

        for (let i = 0; i < 5; i++) {
            let response = await fetch ('https://api.chucknorris.io/jokes/random');
            if(response.ok) {
                const joke = await response.json();
                promises.push({txt: joke.value, id: joke.id});
            }
        }
        Promise.all(promises)
            .then(jokes => this.setState({jokes}));

    }
     fetchJokes  = () => {
        const promises = [];

        for (let i = 0; i < 5; i++) {
            let response =  fetch ('https://api.chucknorris.io/jokes/random');
            if(response.ok) {
                const joke = response.json();
                console.log(joke);
                promises.push({txt: joke.value, id: joke.id});
                console.log(promises);
            }
        }
        Promise.all(promises)
            .then(jokes => this.setState({jokes}));
    };
    render() {
        return (
            <div className='ChuckJokes'>
                {this.state.jokes.map(joke=>(
                    <JokeCard
                        key={joke.id}
                        jokeTxt={joke.txt}/>
                ))}
                <Button onClick={this.fetchJokes}>new jokes</Button>
            </div>
        );
    }
}

export default ChuckJokes;