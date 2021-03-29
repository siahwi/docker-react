import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    
    //onFormSubmit = (event) => { 
    // call it using reference this. this.onFormSubmit
    onFormSubmit (event) {            
        event.preventDefault();         

        this.props.onAppSubmit(this.state.term);
    }

    /*
    onInputChange(event) {
        event.target.value
    }*/

    // passing callback function reference that do not use onInputChange()
    // everytime change will update the state
    // 
    render() {
        return (
            <div className= "ui segment">
            <form onSubmit={(event) => this.onFormSubmit(event) } className= "ui form">
                <div className="field">
                    <label>Image Search</label>
                <input 
                    type="text" 
                    value ={this.state.term}
                    onChange={e => this.setState({term : e.target.value})}></input> 
                </div>
            </form>
            </div>
            );
    }
}

export default SearchBar;