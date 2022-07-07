import React, { Component, useState } from "react";
import Login from '../login/login'

import './header.scss'

function Header(){

    return(
        <div className="flex-row site-header">
            <div className="flex-row site-title">
                gabeseabaugh.com
            </div>
        </div>
    )
}

export default Header;