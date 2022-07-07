import React, {useEffect} from 'react';
import {Navigate, useNavigate, Link} from 'react-router-dom';
import {ratStats, goblinStats, skeletonStats, ogreStats, chimeraStats} from '../Characters/Characters';
import axios from "axios";

import GameButton from '../GameButton/GameButton';

import './WinTransition.scss'

// {enemyDefeated, thePlayer, modifyPlayer, modeChanger}, modifyLoggedIn

export const WinTransition = (props) => {

    const enemyDefeated = props.enemyDefeated;
    let thePlayer = props.thePlayer;
    const modifyPlayer = props.modifyPlayer;
    const modeChanger = props.modeChanger;
    let modifyLoggedIn = props.modifyLoggedIn;

    console.log(modifyLoggedIn.playerLoggedIn.data)

    function toNextRound(){
        modeChanger('setstage');
    }

    const updatePlayerLoggedIn = (modifyLoggedIn) => {
        if(thePlayer.floor > parseInt(modifyLoggedIn.playerLoggedIn.data.highscore)){
            modifyLoggedIn.playerLoggedIn.data.highscore = thePlayer.floor;
            modifyLoggedIn.playerLoggedIn.data.highscore = modifyLoggedIn.playerLoggedIn.data.highscore.toString();
            try{
                axios.post("http://localhost:8000/users/updateUser", modifyLoggedIn.playerLoggedIn.data).then((response) => {
                console.log(response);
            })
            } catch (error) {
                console.error(error);
            }
        }        
    }

    function levelUp(thePlayer){
        console.log(thePlayer);
        const levelup = document.getElementById("levelup");
        const lvHealth = thePlayer.levelScale[0];
        const lvPAtk = thePlayer.levelScale[1];
        const lvPDef = thePlayer.levelScale[2];
        const lvMAtk = thePlayer.levelScale[3];
        const lvMDef = thePlayer.levelScale[4];
        levelup.innerHTML += 
              `<div>Level Up! +${lvHealth} Max Health, +${lvPAtk} P.Attack, +${lvPDef} P.Defense, +${lvMAtk} M.Attack, +${lvMDef} M.Defense</div>`;
        thePlayer.maxHealth = thePlayer.maxHealth + lvHealth;
        thePlayer.physicalAttack = thePlayer.physicalAttack + lvPAtk;
        thePlayer.physicalDefense = thePlayer.physicalDefense + lvPDef;
        thePlayer.magicAttack = thePlayer.magicAttack + lvMAtk;
        thePlayer.magicDefense = thePlayer.magicDefense + lvMDef;
        thePlayer.level = thePlayer.level + 1;
        console.log(thePlayer);
        return thePlayer;
    }

    function levelCheck(thePlayer){
        if(thePlayer.experience >= thePlayer.level * 25){
            thePlayer.experience = 0;
            thePlayer = levelUp(thePlayer);
        }
        return thePlayer
    }

    useEffect(() => {
        console.log(thePlayer.experience);
        thePlayer.experience = thePlayer.experience + enemyDefeated.reward;
        thePlayer.floor++;
        thePlayer = levelCheck(thePlayer);
        modifyPlayer(thePlayer);
        updatePlayerLoggedIn(modifyLoggedIn, thePlayer)
    });



    return(
        <div className="win-transition-screen flex-col">

            <div className="win-transition-title flex-row">
                You defeated the {enemyDefeated.name}!
            </div>

            <div className="win-transition-reward flex-row">
                You received {enemyDefeated.reward * 2} experience for your efforts!
            </div>

            <div id="levelup" className="win-transition-levelup flex-row">

            </div>

            <div className="next-round flex-row">
                <button className="next-round-button" type="button" onClick={() => toNextRound()}>Next Round!</button>
            </div>

        </div>
    )
}