import React from 'react';

const Rocket = (props) => {
    const {name, year, img} = props;
    return (
        <div className='block'>
            <div className='text'>
                <h3>{name}</h3>
                <h4>{year}</h4>
            </div>
            <img src={img} alt={name}/>
        </div>
    );
};

export default Rocket;