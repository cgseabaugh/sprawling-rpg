
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PageWrapper = (props) => {
    return (
        <div className="flex-col container">
            <div className="main-content flex-col">
                <div className="justify-center main-well">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default PageWrapper