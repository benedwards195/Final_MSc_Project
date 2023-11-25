import './Prenavbar.css';
import React from 'react';

export default function Prenavbar() {
    return(
        <>
        <nav className="navbar">
            <ul>
             <li><a href="/login">Login</a></li>   
             <li><a href="/register"> Register</a></li>
            </ul>
        </nav>
        </>
    )
}