import React from 'react';

import Bar from '../Bar/Bar'

import './PlayerSummary.scss';

const red = '#821200';
const blue = '#1953cb';
const white = 'rgb(255, 255, 255)'

const enemyBorder = 'none';
const playerBorder = '4px solid #b3a064';

const PlayerSummary = ({ main, name, level, health, maxHealth, summaryId}) => {
    return(
        <div style={{ border: main ? playerBorder : enemyBorder }} id={summaryId} className="player-summary-main">
            <div className="info">
                <div className="name">{name}</div>
                <div className="level">Lvl: {level}</div>
            </div>
            <div className="health">
                <Bar label="HP" value={health} maxValue={maxHealth}/>
            </div>
        </div>
    )
}

export default PlayerSummary;

//  style={{ border: main ? playerBorder : enemyBorder }}