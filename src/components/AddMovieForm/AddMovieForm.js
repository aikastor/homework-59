import React from 'react';
import './AddMovieForm.css';

const AddMovieForm = (props) => {
    return (
        <form onSubmit={props.addMovie}>
            <input required type="text"
                   name='currentMovie'
                   placeholder='Enter movie name'
                   autoFocus={true}
                   onChange={props.onChange}
                   value={props.value}
                   className='MovieInput'
            />
            <input type="submit" value="Add"/>
        </form>
    );
};

export default AddMovieForm;