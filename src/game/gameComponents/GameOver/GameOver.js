import React from 'react';
import {Navigate, useNavigate, Link} from 'react-router-dom';

import GameButton from '../GameButton/GameButton';

import './GameOver.scss'

export const GameOver = () => {


    return(
        <div className="game-over-screen flex-col">

            <div className="game-over-title flex-row">
                Game Over
            </div>

            <div className="replay flex-row">
                <Link className="replay-button" to="/rpg">Try Again</Link>
            </div>

        </div>
    )
}