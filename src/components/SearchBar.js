import React, { useState } from 'react';

const SearchBar = ({onAppSubmit}) => {
    const [term, setTerm] = useState('');

    //onFormSubmit = (event) => { 
    // call it using reference this. this.onFormSubmit
    const onFormSubmit = (event) => {            
        event.preventDefault();         
        onAppSubmit(term);
    }

    // passing callback function reference that do not use onInputChange()
    // everytime change will update the state
    // 
    return (
        <div className= "ui segment">
        <form onSubmit={(event) => onFormSubmit(event) } className= "ui form">
            <div className="field">
                <label>Image Search</label>
            <input 
                type="text" 
                value ={term}
                onChange={e => setTerm(e.target.value)}></input> 
            </div>
        </form>
        </div>
        );
};

export default SearchBar;