import React, { useState } from 'react';
import './game.scss';

import GameButton from './gameComponents/GameButton/GameButton'
import {PlayerSelect} from './gameComponents/PlayerSelect/PlayerSelect'
import Battle from './gameComponents/Battle/Battle'
import {GameOver} from './gameComponents/GameOver/GameOver'
import {Victory} from './gameComponents/Victory/Victory'
import {WinTransition} from './gameComponents/WinTransition/WinTransition'
import Field from './gameComponents/Field/Field'
import enemyGenerator from './gameComponents/enemyGenerator/enemyGenerator';
import SetStage from './gameComponents/setStage/setStage';
import {ratStats, batStats, goblinStats, slimeStats, skeletonStats, zombieStats, ogreStats, lamiaStats, behemothStats, chimeraStats} from './gameComponents/Characters/Characters'

function Game(playerLoggedIn){



    const [mode, setMode] = useState('start');
    const [queue, setQueue] = useState();
    const [winner, setWinner] = useState();
    const [selectedPlayer, setSelectedPlayer] = useState();
    let [currentPlayer, setCurrentPlayer] = useState();
    let [currentEnemy, setCurrentEnemy] = useState();
    let [lastEnemy, setLastEnemy] = useState();
    let [currentEvent, setCurrentEvent] = useState();

    const generateEnemy = (selectedPlayer, currentPlayer, {stageGenerator, setCurrentEnemy}) => {
        console.log("G-G-G-GENERATE!");
        let newEnemy = "";
        if(currentPlayer == undefined){
           newEnemy = stageGenerator(selectedPlayer);
        }else{
            newEnemy = stageGenerator(currentPlayer);
        }
        
        setCurrentEnemy(newEnemy)
    }


    return <div className="main-screen">

        {mode === 'start' && <PlayerSelect createPlayer={setSelectedPlayer} modeChanger={setMode}/>}

        {mode === 'setstage' && <SetStage
            gameMode = {mode}
            setGameMode = {setMode}
            stageWinner = {winner}
            setStageWinner = {setWinner}
            gameSelectedPlayer = {selectedPlayer}
            setGameSelectedPlayer = {setSelectedPlayer}
            gameCurrentPlayer = {currentPlayer}
            setGameCurrentPlayer = {setCurrentPlayer}
            gameCurrentEnemy = {currentEnemy}
            setGameCurrentEnemy = {setCurrentEnemy}
            gameLastEnemy = {lastEnemy}
            setGameLastEnemy = {setLastEnemy}
            gameCurrentEvent = {currentEvent}
            setGameCurrentEvent = {setCurrentEvent}
        />}

        {mode === 'battle' && <Battle
            updateCurrentPlayer={setSelectedPlayer}
            playerSelect={selectedPlayer}
            enemy={currentEnemy}
            onPlayerUpdate={(selectedPlayer) => {
                setCurrentPlayer(selectedPlayer);
            }}
            onEnemyDefeat={(lastEnemy) => {
                setLastEnemy(lastEnemy);
            }}
            onGameEnd={(winner) => {
                setWinner(winner)
                if(winner === false){
                    setMode('gameOver');
                }else{
                    setMode('winTransition');
                }
            }}
        />}

        {mode === 'field' && <Field 
            updateCurrentPlayer={setSelectedPlayer}
            selectedPlayer={selectedPlayer}
            currentPlayer={currentPlayer}
            currentEvent={currentEvent}
        />}

        {mode === 'winTransition' && <WinTransition 
            enemyDefeated={lastEnemy}
            thePlayer={currentPlayer}
            modifyPlayer={(currentPlayer) => {
                setCurrentPlayer(currentPlayer)
            }}
            modeChanger={(mode) => {
                setMode(mode);
            }}
            modifyLoggedIn={(playerLoggedIn)}
        />}

        {mode === 'gameOver' && <GameOver />}

        

    </div>

}

export default Game;