import React, {useState} from 'react';

import './BattleMenu.scss';



const BattleMenu = ({ onAttack, onMagic, onHeal }) => {
    return(
        <div id="battle-menu" className="battle-menu-main">
            <div className="option" onClick={onAttack}>Attack</div>
            <div className="option" onClick={onMagic}>Magic</div>
            <div className="option" onClick={onHeal}>Heal</div>
        </div>
    )
}

export default BattleMenu;