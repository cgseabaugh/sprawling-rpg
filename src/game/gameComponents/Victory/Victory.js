import React from 'react';
import {Navigate, useNavigate, Link} from 'react-router-dom';

import GameButton from '../GameButton/GameButton';

import './Victory.scss'

export const Victory = () => {


    return(
        <div className="victory-screen flex-col">

            <div className="victory-title flex-row">
                You are victorious
            </div>

            <div className="replay flex-row">
                <Link className="replay-button" to="/rpg">Play Again</Link>
            </div>

        </div>
    )
}