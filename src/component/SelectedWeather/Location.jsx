import React from 'react';

function Location({name, country}) {
    let location = `${name}, ${country}`
    return (
        <div className="location">
            <div className="background">
                <span className="name-location">
                    {location}
                </span>
            </div>
        </div>
    );
}

export default Location;