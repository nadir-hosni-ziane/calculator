import React from 'react';

const MagnificientEqualButton = ({onClick}) => {
    return ( 
        <div>
            <button onClick={onClick} class="butt-calc" name="=">= </button> 
        </div>
    );
};

export default MagnificientEqualButton;