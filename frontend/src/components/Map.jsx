import React from 'react';

const MapWithGoogleEmbedNoAPI = ({ loc }) => {

    return (
        <iframe
            className='rounded-md'
            title="Google Map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${loc}&output=embed`}
        ></iframe>
    );
};

export default MapWithGoogleEmbedNoAPI;