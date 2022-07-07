import { React, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.scss';


const Login = ({logInUser, navigate}, userLoggedIn) => {


    const [toggleError, setToggleError] = useState(false)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    
    

    const userChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        let tempUser = {...user};
        tempUser[name] = value;
        setUser(tempUser);
    }

    // const SignUpSubmitHandler = () => {
    //     const newUser = {
    //         userName: user.userName,
    //         userEmail: user.userEmail,
    //         userPassword: user.userPassword
    //     }
        
    // }.

    const sendLogin = (user) => {
        axios.post("http://localhost:8000/users/signInUser", user).then((response) => {
            console.log(response);
            logInUser(response);
        })
    }

    const loginSubmitHandler = (e) => {
        const emailErrorElement = document.getElementById("email-error");
        const passwordErrorElement = document.getElementById("password-error");
        let emailMessage = [];
        let passwordMessage = [];
        if(user.email === '' || user.email == null){
            emailMessage.push("Please enter your Email Address.")
        }
        if(user.password === '' || user.password == null){
            passwordMessage.push("Please enter your Password.")
        }
        if(emailMessage.length > 0) {
            e.preventDefault();
            emailErrorElement.innerText = emailMessage.join(', ');
        }
        if(passwordMessage.length > 0) {
            e.preventDefault();
            passwordErrorElement.innerText = passwordMessage.join(', ');
        }
        if(emailMessage.length === 0 && passwordMessage.length === 0){
            try{
                axios.post("http://localhost:8000/users/signInUser", user).then((response) => {
                    if(response.data === ""){
                        emailMessage.push("Incorrect email...");
                        emailErrorElement.innerText = emailMessage.join(', ');
                        passwordMessage.push("or password.");
                        passwordErrorElement.innerText = passwordMessage.join(', ');
                    }else{
                        logInUser(response);
                    }
                })
            } catch (e){
                console.log(e)
            }
            
        }
    }

    
    return (

        <div className="flex-row site-login">
            
            <div className="login-email login-div">
                <input required type="text" name="email" className="login-email-input login-input" id="login-username-email" placeholder="Email" value={user.email} onChange={userChangeHandler}></input>
                <div id="email-error"></div>
            </div>
            <div className="login-password login-div">
                <input required type="password" name="password" className="login-password-input login-input" id="login-password-input" placeholder="Password" value={user.password} onChange={userChangeHandler}></input>
                <div id="password-error"></div>
            </div>
            <div className="login-button login-div">
                <button type="button" className="login-submit-button" onClick={loginSubmitHandler}>Sign In</button>
            </div>
            
         </div>
    )    
}

export default Login