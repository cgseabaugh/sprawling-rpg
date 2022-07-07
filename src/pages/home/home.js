import React, {useState} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import Input from '../../components/input/input'

import Button from '../../components/button/button'
import Signup from '../../components/signup/signup'

import './home.scss';
import '../../flex.css';

function Home(props){

    console.log(props.playerLoggedIn);

    if(props.playerLoggedIn === null){
        return (
            <div className="flex-row home-page">
                <div className="flex-col home-left">
                    <div className="home-logo"></div>
                    <div className="flex-row home-menu">
                        <Button buttonName="About" value="/about" className="primary-button" id="about-nav"/>
                    </div>
                    <div className="flex-row home-images">
                    <div className="flex-col home-bonfire">
                        <Link className="bonfire-link" to="/rpg"/>
                    </div>
                    <div className="flex-col home-herald">
                        <Link className="herald-link" to="/rpg"/>
                    </div>
                    </div>
                </div>
                <div className="flex-col home-right">
                    <div className="flex-row home-message">
                        <p className="message-text">You've found a safe place to <span className="white-text">rest</span>.</p>
                        <p className="message-text">What would you like to do?</p>.
                    </div>
                    <div className="home-signup">
                        <Signup logInUser={props.logInUser}/>
                    </div>
                    
                </div>
            </div>
        )
    }else{
        return (
            <div className="flex-row home-page">
                <div className="flex-col home-left">
                    <div className="home-logo"></div>
                    <div className="flex-row home-menu">
                        <Button buttonName="About" value="/about" className="primary-button" id="about-nav"/>
                    </div>
                    <div className="flex-row home-images">
                    <div className="flex-col home-bonfire">
                        <Link className="bonfire-link" to="/rpg"/>
                    </div>
                    <div className="flex-col home-herald">
                        <Link className="herald-link" to="/rpg"/>
                    </div>
                    </div>
                </div>
                <div className="flex-col home-right">
                    <div className="flex-row home-message">
                        <p className="message-text">You've found a safe place to <span className="white-text">rest</span>.</p>
                        <p className="message-text">What would you like to do?</p>          
                    </div>
                    <div className="home-right-profile">
                        <Button buttonName="My Profile" value="/profile" className="profile-button" id="profile-nav"/>
                    </div>
                    <div className="home-right-play">
                        <Button buttonName="" value="/rpg" className="home-play-button" id="rpg-nav"/>
                    </div>
                </div>
            </div>
        )
    }
        
    

    

    
}

export default Home;

