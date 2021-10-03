import React from 'react';

const Reset = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick} class="butt-calc" name="reset">AC</button>
        </div>
    );
};

export default Reset;