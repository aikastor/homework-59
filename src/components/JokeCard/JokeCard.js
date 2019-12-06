import React from 'react';
import './JokeCard.css';

const JokeCard = (props) => {
    return (
        <div className='JokeCard'>{props.jokeTxt}</div>
    )
};

export default JokeCard;