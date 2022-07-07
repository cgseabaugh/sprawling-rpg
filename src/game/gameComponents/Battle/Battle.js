import React, {useEffect, useState} from 'react';
import './Battle.scss';

import PlayerSummary from '../PlayerSummary/PlayerSummary'
// import {opponentStats} from '../Characters/Characters'
import BattleMenu from '../BattleMenu/BattleMenu'
import {BattleAnnouncer} from '../BattleAnnouncer/BattleAnnouncer'
import {useBattleSequence} from '../hooks/useBattleSequence'
import {useAIOpponent} from '../hooks/useAIOpponent'
import '../../../flex.css';
import { wait } from '@testing-library/user-event/dist/utils';
import stageGenerator from '../enemyGenerator/enemyGenerator';
import {ratStats, batStats, goblinStats, slimeStats, skeletonStats, zombieStats, ogreStats, lamiaStats, behemothStats, chimeraStats} from '../Characters/Characters'



const Battle = ({enemy, playerSelect, onPlayerUpdate, onEnemyDefeat, onGameEnd}, currentPlayer) => {


    function returnMenu(){
        const battlemenu2 = document.getElementById("battle-menu");
        battlemenu2.classList.remove('hidden');
    }

    let playerStats = playerSelect;
    
    if(currentPlayer == undefined){
        const playerStats = playerSelect;
    }else{
        const playerStats = currentPlayer;
    }

    let opponentStats = enemy;


    const [sequence, setSequence] = useState({});

    const {turn, inSequence, playerHealth, opponentHealth, playerAnimation, opponentAnimation, announcerMessage } = useBattleSequence(sequence, playerStats, opponentStats);

    const aiChoice = useAIOpponent(turn);



    useEffect(() => {
        if(turn === 0 && !inSequence){
            returnMenu();
        }
        if(aiChoice && turn === 1 && !inSequence) {
            setSequence({ turn, mode:aiChoice});
        }
    }, [turn, aiChoice, inSequence]);

    useEffect(() => {
        if(playerHealth === 0 || opponentHealth === 0){
            playerStats.health = playerHealth;
            onPlayerUpdate(playerStats);
            onEnemyDefeat(opponentStats);
            (async () => {
                await wait(1000);
                onGameEnd(playerHealth === 0 ? false : true)
            })();
        }
    }, [playerHealth, opponentHealth, onGameEnd]);
    

    return(
        <>
            <div className="opponent flex-row">
               
            </div>

            <div className="characters">
                <div className="gameHeader">
                    {playerStats.name} vs {opponentStats.name}
                </div>

                <div className="gameImages">
                    <div className="playerSprite">
                        <img alt={playerStats.name} src={playerStats.img} className={playerAnimation} />
                    </div>
                    <div className="opponentSprite">
                        <img alt={opponentStats.name} src={opponentStats.img} className={opponentAnimation} />
                    </div>
                </div>
            </div>



            <div className="user flex-col">
                <div className="summary">
                    <PlayerSummary summaryId="player-summary" main={true} health={playerHealth} name={playerStats.name} level={playerStats.level} maxHealth={playerStats.maxHealth}/>
                    <PlayerSummary summaryId="enemy-summary" main={false} health={opponentHealth} name={opponentStats.name} level={opponentStats.level} maxHealth={opponentStats.maxHealth}/>
                </div>
                <div className="hud">


                    <div className="hudChild">
                        <BattleAnnouncer message={announcerMessage || `What will ${playerStats.name} do?`} />
                    </div>



                    <div className="hudChild">
                        <BattleMenu 
                            onAttack={() => setSequence({ turn, mode:'attack'})} 
                            onMagic={() => setSequence({ turn, mode:'magic'})} 
                            onHeal={() => setSequence({ turn, mode:'heal'})} 
                        />
                    </div>
                </div>
            </div>
            
            
        </>
        
    )
    
}

export default Battle;