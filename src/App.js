// import logo from './logo.svg';
// import './App.css';
import './App.scss';

import React, { Component, useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate} from 'react-router-dom';

import Home from './pages/home/home';
import About from './pages/about/about';
import Rpg from './pages/rpg/rpg';
import Profile from './pages/profile/profile';
import Game from './game/game';
import PageWrapper from './components/pageWrapper/pageWrapper'
import Header from './components/header/header';
import Login from './components/login/login';
import LoggedIn from './components/loggedIn/loggedIn';
import Footer from './components/footer/footer';



function App() {

  const [loggedIn, setLoggedIn] = useState(null)


  console.log("app")

  return (
    <div className="App flex-col">
      
      <div className="header flex-row">
        
        <div className="app-header">
          <Header />
        </div>
        <div className="app-login">
          {loggedIn ? <LoggedIn logoutCurrentUser={setLoggedIn} loggedInUser={loggedIn}/> : <Login logInUser={setLoggedIn} navigate={useNavigate} userLoggedIn={loggedIn}/>}
        </div>
       
        
      </div>
      
      <div className="main flex-row">
        
          <Router>
            <Routes>
              <Route exact path="/" element={<Home playerLoggedIn={loggedIn} logInUser={setLoggedIn}/>}></Route>
              <Route path="/about" element={<About playerLoggedIn={loggedIn} />}></Route>
              <Route path="/rpg" element={loggedIn ? <Rpg playerLoggedIn={loggedIn}/> : <Navigate to="/"/>} ></Route>
              <Route path="/game" element={loggedIn ? <Game playerLoggedIn={loggedIn}/> : <Navigate to="/"/>}></Route>
              <Route path="/profile" element={loggedIn ? <Profile playerLoggedIn={loggedIn}/> : <Navigate to="/"/>}></Route>
            </Routes>
          </Router>
        
      </div>
      
      <div className="footer flex-row">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

// class App extends Component {
//     state = {
//         counter: 0
//     };

//     handleClick = () => {
//         this.setState(prevState => {
//             return { counter: prevState.counter + 1 };
//         });
//     };
//     render() {
        
//     }
// }
// export default App;


