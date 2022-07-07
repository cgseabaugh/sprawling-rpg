import React from 'react';
import Accordion from '../../components/accordion/accordion'
import {Link, Navigate, useNavigate} from 'react-router-dom';

import './about.scss';

function About(){
    return(
        <div className="flex-row about-page">
            <div className="flex-col about-menu">
                <div className="flex-row back-home">
                    <div className="back-home-button"><Link className="back-home-button-link" to="/">Return home</Link></div>
                </div>
                <div className="flex-row accordions">
                    <Accordion 
                        title="Completed" 
                        content="<p>
                        To be added next: <br/><br/>
                        <b>1,</b> Transition Screen after battle victory. <b><i>COMPLETED!</i></b> <br/><br/>
                        <b>2,</b> Updated player stats carry over from previous battle.  <b><i>COMPLETED!</i></b> <br/><br/>
                        <b>3,</b> Balancing of player/enemy stats <b><i>COMPLETED!</i></b>  <br></br>
                        <b>4,</b> Add auto-Level Up capability <b><i>COMPLETED!</i></b>  <br></br>
                        <b>5,</b> Hide battle menu after choice selection, return on your next turn <b><i>COMPLETED!</i></b>  <br></br>
                        <b>1,</b> Name player on character creation <b><i>COMPLETED!</i></b><br></br>
                    </p>"
                    />
                    <Accordion 
                        title="To-Do List" 
                        content="<p>
                            To be added next: <br/><br/>
                            <b>2,</b> Create battle-stage Class for interchangeable enemies/rewards/background-image<br></br>
                            <b>3,</b> Stats increase on level-up based on 'Profession'
                        </p>"
                    />
                </div>
            </div>
            <div className="flex-row about-images">
                <div className="cave-knight"></div>
            </div>
        </div>
    )
}

export default About;