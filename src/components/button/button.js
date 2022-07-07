import React from 'react';

import {Link, Navigate, useNavigate} from 'react-router-dom';

import './button.css';

const Button = (props) => {

    const navigate = useNavigate();

    return(
        <div className="flex-col button" id={props.id} >
            <button className={props.className} type="button" onClick={() => navigate(props.value)}>{props.buttonName}</button>
        </div>
    )
}

export default Button;