import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('se cargo el componente ShowIncrement');

    return (
        <button
            className="btn btn-primary p-2 m-2"
            onClick={() => {
                increment(5);
            }}
        >
            Increment
        </button>
    )
});
