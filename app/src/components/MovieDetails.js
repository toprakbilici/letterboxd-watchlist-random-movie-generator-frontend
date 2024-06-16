import React from 'react';

const MovieDetails = ({ title, link }) => {
    return (
        <div className="mt3">
            <h2>Random Movie Details</h2>
            <p>Title: <a href={link} target="_blank" rel="noopener noreferrer">{title}</a></p>
        </div>
    );
};

export default MovieDetails;