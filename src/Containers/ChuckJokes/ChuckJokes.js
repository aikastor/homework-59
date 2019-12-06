import React, {Component} from 'react';
import JokeCard from "../../components/JokeCard/JokeCard";
import Button from "../../components/Button/Button";
import './ChuckJokes.css';

class ChuckJokes extends Component {
    state ={
        jokes: []
    };

   async getJokes (howMany) {
       let promises = [];
       for (let i = 0; i < howMany; i++) {
           let response = await fetch ('https://api.chucknorris.io/jokes/random');
           if (response.ok) {
               const joke = await response.json();
               promises.push({txt: joke.value, id: joke.id});
           }
       }
       Promise.all(promises)
           .then(jokes => this.setState({jokes}));
   };
    async componentDidMount() {
        this.getJokes(1)
    }
    render() {
        return (
            <div className='ChuckJokes'>
                <b>Chuck Norris Jokes!</b>
                {this.state.jokes.map(joke=>(
                    <JokeCard
                        key={joke.id}
                        jokeTxt={joke.txt}/>
                ))}
                <Button onClick={()=>this.getJokes(5)}>new jokes</Button>
            </div>
        );
    }
}

export default ChuckJokes;