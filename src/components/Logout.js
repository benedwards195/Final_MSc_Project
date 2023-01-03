import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Logout({setToken}) {
    let navigate = useNavigate();

    useEffect(() => {
        setToken("");
        navigate("/");
    })

    return (
        <>
        <h2>You are being logged out. Please wait...</h2>
        </>
    )
}