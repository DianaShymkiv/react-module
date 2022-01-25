import React from 'react';

import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={css.text}>
            Select the page <span> Users </span> or <span> Posts </span>
        </div>
    );
};

export {HomePage};