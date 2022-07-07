import './PlayerSelect.scss'

import assassin from '../assets/images/Assassin.png'
import bandit from '../assets/images/Bandit.png'
import knight from '../assets/images/Captain.png'
import warrior from '../assets/images/General.png'
import magician from '../assets/images/Mage.png'
import shaman from '../assets/images/Shaman.png'

import {assassinStats, banditStats, knightStats, warriorStats, magicianStats, shamanStats} from '../Characters/Characters'

import PlayerCharacter from '../Characters/Characters'

import React, { useEffect, useState } from 'react';



export const PlayerSelect = ({modeChanger, createPlayer, ...rest}) => {

    let profTracker;

    // const [modeB, setModeB] = useState('name');

    // function changePlayer(e){
    //     playerChanger(e);
    //     modeChanger('battle');
    // }

    const professionTrack = (prof) => {
        profTracker = prof;
    }

    const newPlayer = () => {
        const pcname = document.getElementById("name-input").value;
        profTracker.name = pcname;
        const pc = new PlayerCharacter(0, profTracker.name, profTracker.level, profTracker.maxHealth, profTracker.health, profTracker.img, profTracker.physicalAttack, profTracker.physicalDefense, profTracker.magicAttack, profTracker.magicDefense, profTracker.gold, profTracker.experience, 0, profTracker.levelScale);
        console.log(pc)
        createPlayer(pc);
        modeChanger('setstage');
    }

    const toggleSelected = (id) => {
        let allProfs = document.getElementsByClassName("selected");
        for(let i=0; i<allProfs.length; i++){
            allProfs[i].classList.remove("selected");
        }
        const prof = document.getElementById(id);
        prof.classList.add("selected");
    }

    return(

        <div className="flex-col selection-screen">
            <h2 className="character-selection-title">Select and name a Fighter to begin</h2>
            <div className="character-name flex-row">
                <input type="text" className="name-input" id="name-input" placeholder="Name"/>
            </div>
            <div className="flex-row selection-screen-top">
                <div id="assassin-prof" className="character-selection-item">
                    <img className="character-select-image" src={assassin} alt="" onClick={() => {professionTrack(assassinStats); toggleSelected("assassin-prof")}} />
                </div>
                <div id="bandit-prof" className="character-selection-item">
                    <img className="character-select-image" src={bandit} alt="" onClick={() => {professionTrack(banditStats); toggleSelected("bandit-prof")}} />
                </div>
                <div id="knight-prof" className="character-selection-item">
                    <img className="character-select-image" src={knight} alt="" onClick={() => {professionTrack(knightStats); toggleSelected("knight-prof")}} />
                </div>
                
            </div>
            <div className="flex-row selection-screen-bottom">
                <div id="warrior-prof" className="character-selection-item">
                    <img className="character-select-image" src={warrior} alt="" onClick={() => {professionTrack(warriorStats); toggleSelected("warrior-prof")}}  />
                </div>
                <div id="magician-prof" className="character-selection-item">
                    <img className="character-select-image" src={magician} alt="" onClick={() => {professionTrack(magicianStats); toggleSelected("magician-prof")}}  />
                </div>
                <div id="shaman-prof" className="character-selection-item">
                    <img className="character-select-image" src={shaman} alt="" onClick={() => {professionTrack(shamanStats); toggleSelected("shaman-prof")}}  />
                </div>
            </div>
            <div className="flex-row submit-button">
                <button type="button" className="character-create-button" onClick={() => newPlayer()}>Play</button>
            </div>
        </div>
        
        // <div className="flex-col selection-screen">
        //     <h2 className="character-selection-title">Select a Fighter to begin</h2>
        //     <div className="flex-row selection-screen-top">
        //         <div className="character-selection-item">
        //             <img className="character-select-image" src={assassinStats.img} alt="" onClick={() => changePlayer({assassinStats})} />
        //         </div>
        //         <div className="character-selection-item">
        //             <img className="character-select-image" src={banditStats.img} alt="" onClick={() => changePlayer({banditStats})} />
        //         </div>
        //         <div className="character-selection-item">
        //             <img className="character-select-image" src={captainStats.img} alt="" onClick={() => changePlayer({captainStats})} />
        //         </div>
                
        //     </div>
        //     <div className="flex-row selection-screen-bottom">
        //         <div className="character-selection-item">
        //             <img className="character-select-image" src={generalStats.img} alt="" onClick={() => changePlayer({generalStats})} />
        //         </div>
        //         <div className="character-selection-item">
        //             <img className="character-select-image" src={mageStats.img} alt="" onClick={() => changePlayer({mageStats})} />
        //         </div>
        //         <div className="character-selection-item">
        //             <img className="character-select-image" src={soldierStats.img} alt="" onClick={() => changePlayer({soldierStats})} />
        //         </div>
        //     </div>
        // </div>

    )

}