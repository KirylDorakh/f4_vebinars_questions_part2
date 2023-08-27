import React from 'react';
import './InputForm.css'

const InputForm = (props) => {
    return (
        <div className="input-form">
            <label>{props.name}</label>
            <input className="input"/>
        </div>
    );
};

export default InputForm;