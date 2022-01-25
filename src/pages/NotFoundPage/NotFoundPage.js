import React from 'react';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.text}>
            Error: Incorrect link
        </div>
    );
};

export {NotFoundPage};