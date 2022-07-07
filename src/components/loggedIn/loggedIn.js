import { React, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/button/button'

import './loggedIn.scss';


const LoggedIn = (props) => {

    const currentUser = props.loggedInUser.data.username;

    

    const LogoutUser = () => {
        props.logoutCurrentUser(null);
    }
    

    return(
        <div className="flex-row site-loggedIn">
            <div className="flex-row user-greeting">Welcome,</div>
            <div className="flex-row user-name">{currentUser}</div>
            <div className="logout-btn">
                <button type="button" className="logout-submit-btn" onClick={LogoutUser}>Log Out</button>
            </div>
        </div>
    )
   
    
}

export default LoggedIn