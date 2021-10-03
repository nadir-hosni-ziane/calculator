import React from 'react';
import '../styles/beautifulScreen.css'

const BeautifulScreen = ({value}) => {
    // console.log(value);
    // // const result = function({value}){
    // // }
    // if(Result){
    //     console.log(eval(Result));
    // }

    return (
        <div>
            <div class="ecran-calculatrice">
                <p class="number">{value}</p>
            </div>
        </div>
    );
};

export default BeautifulScreen;