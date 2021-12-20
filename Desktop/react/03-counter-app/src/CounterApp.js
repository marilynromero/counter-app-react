import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ( {value = 10 } ) => {


    const [ counter, setCounter ] = useState( value );


    const handleAdd = (e) => {

        setCounter( counter + 1 );  
        // setCounter( (c) => c + 1);
    }

    const handleSubtract = () => {
        setCounter( counter - 1 );
    }

    const handleReset = () => setCounter( value );


    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <div className="btn-container">
                <button className="pure-button" onClick={ handleSubtract }>-1</button>
                <button className="neutral" onClick={ handleReset }>Reset</button>  
                <button className="pure-button" onClick={ handleAdd }>+1</button>    
            </div>
        </>
    );   
}

CounterApp.propTypes = {
    value: PropTypes.number
}



export default CounterApp;