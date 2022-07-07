import React, {useEffect, useState} from 'react';
import Battle from '../Battle/Battle';
import enemyGenerator from '../enemyGenerator/enemyGenerator';
import eventGenerator from '../eventGenerator/eventGenerator'
import {lockedDoor, thorns, darkness, miasma} from '../FieldComponents/events'
import {ratStats, batStats, goblinStats, slimeStats, skeletonStats, zombieStats, ogreStats, lamiaStats, behemothStats, chimeraStats} from '../Characters/Characters';

const SetStage = (props) => {

    console.log(props);

    let gameMode = props.gameMode;
    const setGameMode = props.setGameMode;
    let stageWinner = props.stageWinner;
    const setStageWinner = props.setStageWinner;
    let gameSelectedPlayer = props.gameSelectedPlayer;
    const setGameSelectedPlayer = props.setGameSelectedPlayer;
    let gameCurrentPlayer = props.gameCurrentPlayer;
    const setGameCurrentPlayer = props.setGameCurrentPlayer;
    let gameCurrentEnemy = props.gameCurrentEnemy;
    const setGameCurrentEnemy = props.setGameCurrentEnemy;
    let gameLastEnemy = props.gameLastEnemy;
    const setGameLastEnemy = props.setGameLastEnemy;
    let gameCurrentEvent = props.gameCurrentEvent;
    const setGameCurrentEvent = props.setGameCurrentEvent;

    console.log(gameSelectedPlayer.name)

    let [stageEnemy, setStageEnemy] = useState();
    let [stageEvent, setStageEvent] = useState();

    // const generateEvent = () => {

    //     let newEvent = eventGenerator();

    //     console.log(newEvent.createdEvent);

    //     // setStageEvent(newEvent.createdEvent);

    //     return newEvent.createdEvent
        
    //     console.log(stageEvent);
    // }

    const generateEnemy = (gameSelectedPlayer, gameCurrentPlayer) => {
        console.log(gameSelectedPlayer);
        console.log(gameCurrentPlayer);
        let newEnemy = "";
        if(gameCurrentPlayer === undefined){
           newEnemy = enemyGenerator(gameSelectedPlayer);
        }else{
            newEnemy = enemyGenerator(gameCurrentPlayer);
        }
        
        // setStageEnemy(newEnemy);
        // setGameMode('battle');

        console.log("New Enemy: " + newEnemy);

        setGameCurrentEnemy(newEnemy);
    }

    // generateEnemy(gameSelectedPlayer, gameCurrentPlayer, {setStageEnemy, setGameMode});

    useEffect(() => {
        console.log(gameCurrentEnemy);
        generateEnemy(gameSelectedPlayer, gameCurrentPlayer);
        console.log(gameCurrentEnemy);
        // console.log(stageEnemy.newEnemy);
        // setStageEvent(generateEvent());
        // setGameCurrentEnemy(stageEnemy);
        // console.log(stageEvent);
        // setGameCurrentEvent(stageEvent);
        setGameMode('battle');
    })

    // const setStage = () => {
    //     generateEnemy(gameSelectedPlayer, gameCurrentPlayer, {enemyGenerator, setGameCurrentEnemy});
    //     generateEvent();
    //     setGameCurrentEnemy(stageEnemy);
    //     setGameCurrentEvent(stageEvent);
    //     setGameMode('field');
    // }

    // setStage();

    

    return(
        <div></div>
    )
}

export default SetStage;