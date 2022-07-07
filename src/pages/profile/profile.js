import React, {useState} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';

import Button from '../../components/button/button';
import UserProfile from './userProfile';
import ChangePassword from '../../components/changePassword/changePassword';

import './profile.scss';


function Profile(props){

    console.log(props.playerLoggedIn.data);

    const [profileMode, setProfileMode] = useState(false);

    return(
        <div className="flex-row profile-page">
            <div className="flex-col profile-left">
                <div className="flex-row back-home">
                    <div className="back-home-button"><Link className="back-home-button-link" to="/">Return home</Link></div>
                </div>
                <div className="profile-play">
                    <Button buttonName="Start New Game" value="/game" className="primary-button" id="rpg-nav"/>
                </div>
                <div className="">
                    
                </div>
                <div className="profile-heroes"></div>
            </div>
            <div className="flex-col profile-middle">
                <UserProfile player={props.playerLoggedIn} />
            </div>
            <div className="flex-col profile-right">
                <ChangePassword mode={profileMode} setMode={setProfileMode} player={props.playerLoggedIn.data}/>
            </div>
        </div>
    )
}

export default Profile;