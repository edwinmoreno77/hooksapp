// import { memo } from 'react';
import React from 'react';


export const Small = React.memo(({ value }) => {

    console.log('volvi a renderizar Small');

    return (
        <small>{value}</small>
    );
});
