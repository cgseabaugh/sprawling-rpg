import { React, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {wait} from '../../game/gameComponents/Characters/helpers'
import axios from 'axios';

import './changePassword.scss'
// import { wait } from '@testing-library/user-event/dist/utils';

const ChangePassword = (props) => {

    const mode = props.mode
    const setMode = props.setMode();

    const confirmPasswordChanged = () => {
        closeChangePassword();
    }

    const passwordCheck = (props) => {
        const currentPw = document.getElementById("current-password-input").value;
        const newPw = document.getElementById("new-password-input").value;
        const reNewPw = document.getElementById("re-new-password-input").value;

        console.log("Account Password:" + props.player.password);
        console.log("Entered Password: " + currentPw);

        if(currentPw === props.player.password){
            if(newPw === reNewPw){
                let updatedPlayer = props.player;
                updatedPlayer.password = newPw;
                passwordChangeHandler(updatedPlayer);
            }else{
                console.log("Please re-enter the exact same New Password")
            }
        }else{
            console.log("Your current password doesn't match your account.")
        }
    }

    const closeChangePassword = () => {
        let form = document.getElementById("change-password-form");
        form.classList.add('hidden');
    }

    const passwordChangeConfirmation = async () => {
        let confirmation = document.getElementById("confirmation");
        confirmation.classList.remove('hidden');
        await wait(5000);
        confirmation.classList.add('hidden');
    }

    const passwordChangeHandler = (player) => {
        console.log(player);
        const data = player;
        axios.post("http://localhost:8000/users/updateUser", player).then((response) => {
            passwordChangeConfirmation();
        })
    }

    return (
        <div className="flex-col change-password-form hidden" id="change-password-form">

            <div className="close-button">
                <div className="close-button-icon" onClick={closeChangePassword}>X</div>
            </div>

            <div className="flex-col change-password-form-item">
                <div className="change-password-form-item-label">Please enter your current password.</div>
                <input type="text" className="current-password-input" id="current-password-input" placeholder="Current Password"/>
            </div>

            <div className="flex-col change-password-form-item">
                <div className="change-password-form-item-label">Please enter your new password.</div>
                <input type="text" className="new-password-input" id="new-password-input" placeholder="New Password"/>
            </div>

            <div className="flex-col change-password-form-item">
                <div className="change-password-form-item-label">Please re-enter your new password.</div>
                <input type="text" className="re-new-password-input" id="re-new-password-input" placeholder="Re-Enter New Password"/>
            </div>

            <button type="button" className="change-password-button" onClick={() => passwordCheck(props)}>Confirm Password Change</button>

            <div className="confirm-password-changed hidden" id="confirmation">Your password has been changed.</div>

        </div>
    )

}

export default ChangePassword;