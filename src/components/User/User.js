import React from 'react';

const User = ({user:{id,name},getUserId}) => {

    return (
        <div>
            {name}
            <button className='button' onClick={() => getUserId(id)}>get details</button>
        </div>
    );
};

export default User;