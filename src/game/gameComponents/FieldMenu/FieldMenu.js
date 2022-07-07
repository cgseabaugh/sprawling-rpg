import React, {useState} from 'react';

import './FieldMenu.scss';



const BattleMenu = ({ onKey, onNoKey}, thisEvent) => {
    return(
        <div id="battle-menu" className="battle-menu-main">
            <div className="option" onKey={onKey}>{thisEvent.options[0]}</div>
            <div className="option" onNoKey={onNoKey}>{thisEvent.options[1]}</div>
        </div>
    )
}

export default BattleMenu;