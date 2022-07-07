import React, {useEffect, useState} from 'react';
import PlayerSummary from '../PlayerSummary/PlayerSummary'
import {FieldAnnouncer} from '../FieldAnnouncer/FieldAnnouncer'
import FieldMenu from '../FieldMenu/FieldMenu'

import './Field.scss';

import '../../../flex.css';

const Field = (props) => {

    console.log(props)

    let playerStats = "";

    if(props.selectedPlayer === undefined){
        playerStats = props.currentPlayer;
    }else{
        playerStats = props.selectedPlayer;
    }

    console.log(playerStats);
    console.log(props.currentEvent);

    return(
        <>
            <div className="opponent flex-row">
               
            </div>

            <div className="characters">
                <div className="gameHeader">
                    {playerStats.name}
                </div>

                <div className="gameImages">
                    <div className="playerSprite">
                        <img alt={playerStats.name} src={playerStats.img} className={"a"} />
                    </div>
                    <div className="opponentSprite">
                        {/* <img alt={opponentStats.name} src={opponentStats.img} className={opponentAnimation} /> */}
                    </div>
                </div>
            </div>



            <div className="user flex-col">
                <div className="summary">
                    <PlayerSummary summaryId="player-summary" main={true} health={"10"} name={playerStats.name} level={playerStats.level} maxHealth={playerStats.maxHealth}/>
                    {/* <PlayerSummary summaryId="enemy-summary" main={false} health={opponentHealth} name={opponentStats.name} level={opponentStats.level} maxHealth={opponentStats.maxHealth}/> */}
                </div>
                <div className="hud">


                    <div className="hudChild">
                        {/* <FieldAnnouncer message={announcerMessage || `What will ${playerStats.name} do?`} /> */}
                    </div>



                    <div className="hudChild">
                        <FieldMenu 
                            thisEvent={props.currentEvent}
                            onKey={() => console.log("YAS")} 
                            onNoKey={() => console.log("YAS TWOOO")} 
                        />
                    </div>
                </div>
            </div>
            
            
        </>
        
    )
    
}

export default Field;