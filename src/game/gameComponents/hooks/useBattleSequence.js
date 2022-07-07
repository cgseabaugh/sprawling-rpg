// import { wait } from '@testing-library/user-event/dist/utils';
import {useEffect, useState} from 'react';


import {wait, attack, magic, heal} from '../Characters/helpers';

export const useBattleSequence = (sequence, playerStats, opponentStats) => {
    

    const [turn, setTurn] = useState(0);
    const [inSequence, setInSequence] = useState(false);
    const [announcerMessage, setAnnouncerMessage] = useState('');
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth);
    const [playerHealth, setPlayerHealth] = useState(playerStats.health);
    const [playerAnimation, setPlayerAnimation] = useState('static');
    const [opponentAnimation, setOpponentAnimation] = useState('static'); 

    function hideMenu(){
        const battlemenu = document.getElementById("battle-menu");
        battlemenu.classList.add("hidden")
    }
    
    function returnMenu(){
        const battlemenu2 = document.getElementById("battle-menu");
        battlemenu2.classList.remove('hidden');
    }

    // function toggleMenu(div){
    //     if(div.classList.contains("hidden")){
    //         div.classList.remove("hidden");
    //     }else{
    //         div.classList.add("hidden");
    //     }
    // }

    // function testFunction(test){
    //     console.log(test)
    // }


    useEffect(() => {
        const {mode, turn} = sequence;

        console.log(opponentStats);

        if(mode) {
            const attacker = turn === 0 ? playerStats : opponentStats;
            const receiver = turn === 0 ? opponentStats : playerStats;

            switch(mode) {
                case 'attack': {
                    
                    let damage = attack({attacker, receiver});
                    if(damage < 0){
                        damage = 0;
                    }
                    (async () => {
                        hideMenu();
                        setInSequence(true);
                        setAnnouncerMessage(`${attacker.name} has chosen to attack!`);
                        await wait(1000);
                        turn === 0 ? setPlayerAnimation('attack') : setOpponentAnimation('attack');
                        await wait(100);
                        turn === 0 ? setPlayerAnimation('static') : setOpponentAnimation('static');
                        await wait(500);
                        turn === 0 ? setOpponentAnimation('damage') : setPlayerAnimation('damage');
                        await wait(750);
                        turn === 0 ? setOpponentAnimation('static') : setPlayerAnimation('static');
                        
                        turn === 0 ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0)) : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0));
                        if(damage !== 0){
                            setAnnouncerMessage(`${receiver.name} was struck by the blow!`);
                        }else{
                            setAnnouncerMessage(`${receiver.name} blocked the attack!`);
                        }
                        await wait(2000);
                        setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
                        await wait(1500);
                        setTurn(turn === 0 ? 1 : 0);
                        setInSequence(false);
                    })();
                    
                    break;
                }


                case 'magic': {
                    
                    let damage = magic({attacker, receiver});
                    if(damage < 0){
                        damage = 0;
                    }
                    (async () => {
                        setInSequence(true);
                        setAnnouncerMessage(`${attacker.name} has cast a spell!`);
                        await wait(1000);
                        turn === 0 ? setPlayerAnimation('magic') : setOpponentAnimation('magic');
                        await wait(100);
                        turn === 0 ? setPlayerAnimation('static') : setOpponentAnimation('static');
                        await wait(500);
                        turn === 0 ? setOpponentAnimation('damage') : setPlayerAnimation('damage');
                        await wait(750);
                        turn === 0 ? setOpponentAnimation('static') : setPlayerAnimation('static');
                        
                        turn === 0 ? setOpponentHealth(h => (h - damage > 0 ? h - damage : 0)) : setPlayerHealth(h => (h - damage > 0 ? h - damage : 0));
                        if(damage !== 0){
                            setAnnouncerMessage(`${receiver.name} doesn't know what hit them!`);
                        }else{
                            setAnnouncerMessage(`${attacker.name}'s spell missed!`);
                        }

                        await wait(2000);
                        setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
                        await wait(1500);
                        setTurn(turn === 0 ? 1 : 0);
                        setInSequence(false);
                    })();
                    break;
                }


                case 'heal': {
                    
                    let recovered = heal({ receiver: attacker });
                    if(recovered < 0){
                        recovered = 0;
                    }
                    (async () => {
                        setInSequence(true);
                        setAnnouncerMessage(`${attacker.name} has chosen to heal!`);
                        await wait(1000);
                        turn === 0 ? setPlayerAnimation('magic') : setOpponentAnimation('magic');
                        await wait(1000);
                        turn === 0 ? setPlayerAnimation('static') : setOpponentAnimation('static');
                        await wait(500);
                        
                        turn === 0 ? setPlayerHealth(h => h + recovered <= attacker.maxHealth ? h + recovered : attacker.maxHealth) : setOpponentHealth(h => h + recovered <= attacker.maxHealth ? h + recovered : attacker.maxHealth );
                        if(recovered !== 0){
                            setAnnouncerMessage(`${receiver.name} recovered some health!!`);
                        }else{
                            setAnnouncerMessage(`${receiver.name} healing failed!`);
                        }
                        await wait(2500);
                        setAnnouncerMessage(`Now it's ${receiver.name}'s turn!`);
                        await wait(1500);
                        setTurn(turn === 0 ? 1 : 0);
                        setInSequence(false);
                    })();
                    break;
                }
                default: break;
            }
        }
        

    }, [sequence]);

    return {
        turn, inSequence, playerHealth, opponentHealth, announcerMessage, playerAnimation, opponentAnimation
    }


}