import React, { useEffect, useRef, useState } from 'react';

const ImageCard = (images) => {
    const [spans, setSpans] = useState(0);
    const imageRef = useRef();

    useEffect(()=> {
        imageRef.current.addEventListener('load', updateSpans);

    },[]);

    const updateSpans = () => {
        const height = imageRef.current.clientHeight;
        
        setSpans(Math.ceil(height / 10) +1);        
    }

    return (
        <div style={{ gridRowEnd: `span ${spans}`}}>
            <img 
            ref={imageRef}
            alt={images.image.description} 
            src={images.image.urls.regular}
            />
        </div>
    );


}

export default ImageCard;