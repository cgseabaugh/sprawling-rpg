import { React, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import login from '../login/login'

import './signup.scss';


const Signup = ({logInUser}) => {

    const [toggleError, setToggleError] = useState(false);

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        highscore: "0"
    })

    const userChangeHandler = (event) => {
        const name = event.target.name;
        console.log("name" + " " + name);
        const value = event.target.value;
        console.log("value" + " " + value);
        const tempUser = {...user};
        console.log("tempUser" + " " + tempUser);
        tempUser[name] = value;
        setUser(tempUser);
    }

    // const SignUpSubmitHandler = () => {
    //     const newUser = {
    //         userName: user.userName,
    //         userEmail: user.userEmail,
    //         userPassword: user.userPassword
    //     }
        
    // }

    const signUpSubmitHandler = (e) => {

        const usernameErrorElement = document.getElementById("signup-username-error");
        const emailErrorElement = document.getElementById("signup-email-error");
        const passwordErrorElement = document.getElementById("signup-password-error");

        let usernameMessage = [];
        let emailMessage = [];
        let passwordMessage = [];

        if(user.username === '' || user.username == null){
            usernameMessage.push("Please enter a Username.")
        }
        if(user.email === '' || user.email == null){
            emailMessage.push("Please enter an Email Address.")
        }
        if(user.password === '' || user.password == null || user.password.length < 6){
            passwordMessage.push("Please enter a Password that is at least 6 characters long.")
        }

        if(usernameMessage.length > 0){
            usernameErrorElement.innerText = usernameMessage.join(', ');
        }
        if(emailMessage.length > 0){
            emailErrorElement.innerText = emailMessage.join(', ');
        }
        if(passwordMessage.length > 0){
            passwordErrorElement.innerText = passwordMessage.join(', ');
        }

        if(usernameMessage.length === 0 && emailMessage.length === 0 && passwordMessage.length === 0){
            axios.post("http://localhost:8000/users/signUpUser", user).then((response) => {
                const data ={
                    user: response
                }
                axios.post("http://localhost:8000/users/signInUser", user).then((responseB) => {
                    logInUser(responseB);
                })
            })
        }
    }

    return (

        <div className="flex-col signup">
            <div className="signup-title">
                <p>Create an Account</p>
            </div>
            <div className="signup-username signup-div flex-col">
                <input type="text" name="username" className="signup-username-input signup-input" id="signup-username-input" placeholder="Username" value={user.username} onChange={userChangeHandler}></input> 
                <div id="signup-username-error"></div>
            </div>
            <div className="signup-email signup-div flex-col">
                <input type="text" name="email" className="signup-email-input signup-input" id="signup-email-input" placeholder="Email" value={user.email} onChange={userChangeHandler}></input>
                <div id="signup-email-error"></div>
            </div>
            <div className="signup-password signup-div flex-col">
                <input type="password" name="password" className="signup-password-input signup-input" id="signup-password-input" placeholder="Password" value={user.password} onChange={userChangeHandler}></input>
                <div id="signup-password-error"></div>
            </div>
            <div className="signup-button signup-div">
                <button type="button" className="signup-submit-button" onClick={signUpSubmitHandler}>Sign Up</button>
            </div>
         </div>
    )
}

export default Signup