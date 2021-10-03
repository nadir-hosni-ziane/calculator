import React, {useState} from 'react';
import AmazingNumberButton from './AmazingNumberButton';
import BeautifulScreen from './BeautifulScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import '../styles/calculatrice.css';
import '../styles/amazingNumberButton.css';
import Reset from './Reset';
import ItSOverNineThousand from './ItSOverNineThousand';



const Calculator = () => {

    const [value, setValue] = useState([]); 
    const [message9000, setMessage9000] = useState();

    
    const Calculette = function(e){
            setValue(value => value + e.target.name);
    };

    const Result = function(){
        try {
            setValue(eval(value));
            if(value > 8999){
                setMessage9000('It\'s over 9000 !!!!');
                // console.log(message9000);
            }   
        } catch (e) {
            if (e instanceof SyntaxError) {
                alert('erreur dans le calcul');
                setValue('');
                setMessage9000('');
            }
        }
    };

    const resetValue = function(){
        setValue('');
        setMessage9000('');
    }


    
    return (
        <div class="center">
            <div class="corp-calculatrice">
                <BeautifulScreen value={value}/>
                    <div class="center">
                        <Reset onClick={resetValue}/>
                    </div>
                    <div class="space">
                        <AmazingNumberButton onClick={Calculette}/>
                        <GreatOperationButton onClick={Calculette} />
                    </div>
                <MagnificientEqualButton onClick={Result}/>
            </div>
            <ItSOverNineThousand message={message9000} />
        </div>
    );
};

export default Calculator;