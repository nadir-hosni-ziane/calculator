import React from 'react';

const AmazingNumberButton = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick} class="butt-calc" name="1">1</button>
            <button onClick={onClick} class="butt-calc" name="2">2</button>
            <button onClick={onClick} class="butt-calc" name="3">3</button>
            <button onClick={onClick} class="butt-calc" name="4">4</button>
            <button onClick={onClick} class="butt-calc" name="5">5</button>
            <button onClick={onClick} class="butt-calc" name="6">6</button>
            <button onClick={onClick} class="butt-calc" name="7">7</button>
            <button onClick={onClick} class="butt-calc" name="8">8</button>
            <button onClick={onClick} class="butt-calc" name="9">9</button>
            <button onClick={onClick} class="butt-calc" name="0">0</button>
        </div>
    );
};

export default AmazingNumberButton;