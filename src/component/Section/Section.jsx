import React, {useState} from 'react';

import classes from "./Section.module.css"

const Section = () => {

    const [counter, setCounter] = useState(0)

    function counterPlus(e) {
        if (counter === 0){
            e.target.removeAttribute('disabled')
        }
        setCounter( counter + 1)
    }

    function counterMinus(e) {

        setCounter( counter - 1)
        if (counter === 1){
            e.target.setAttribute('disabled', '')
        }
    }

    return (
        <div className={classes.section}>
            <h1>{counter}</h1>
            <div>
                <button onClick={counterPlus}>+</button>
                <button onClick={counterMinus}>-</button>
            </div>
        </div>
    );
};

export default Section;