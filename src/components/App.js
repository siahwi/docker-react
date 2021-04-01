import React, { useState } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash'
import ImageList from './ImageList';

const App = () => {
    const [images, setImages] = useState([]);

    const onSearchSubmit = async (term) => {        
        const response = await unsplash.get('/search/photos', {
            params: {query: term }
        });

        //console.log(response.data.results);        
        setImages(response.data.results);
    
    }
    return (<div className="ui container" style={{ marginTop: '10px'}}>
    <SearchBar 
        onAppSubmit={onSearchSubmit}
    />
    Found : {images.length} images 
    <ImageList images={images} />
</div>);
};

export default App;