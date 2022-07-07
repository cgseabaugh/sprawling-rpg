import React from 'react';
import './GameButton.scss';

const GameButton = ({onButtonClick, className, text}) => {
    return(
        <div className="game-button">
            <button className={className} onClick={onButtonClick}>{text}</button>
        </div>
    )
}

export default GameButton;