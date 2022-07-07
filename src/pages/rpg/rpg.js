import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';

import Button from '../../components/button/button'
import ScoreBoard from '../../components/scoreboard/scoreboard'

import './rpg.scss'


function Rpg(playerLoggedIn){

    console.log(playerLoggedIn);

    return(
        <div className="flex-row rpg-page">
            <div className="flex-col rpg-left">
                <div className="flex-row back-home">
                    <div className="back-home-button"><Link className="back-home-button-link" to="/">Return home</Link></div>
                </div>
                <div className="rpg-play">
                    <Button buttonName="Start New Game" value="/game" className="primary-button" id="rpg-nav"/>
                </div>
                <div className="rpg-heroes"></div>
            </div>
            <div className="flex-col rpg-right">
                <ScoreBoard />
            </div>
        </div>
    )
}

export default Rpg;