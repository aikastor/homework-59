import React from 'react';

const AddMovieForm = (props) => {
    return (
        <form onSubmit={props.addMovie}>
            <input required type="text"
                   name='currentMovie'
                   placeholder='Enter movie name'
                   autoFocus={true}
                   onChange={props.onChange}
                   value={props.value}
            />
            <input type="submit" value="Add"/>
        </form>
    );
};

export default AddMovieForm;