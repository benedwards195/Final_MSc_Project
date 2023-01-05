import React, { useState, useEffect } from 'react';
import useToken from './useToken';
import WL from './WL';

export default function RW() {
    const [personalBulkWorkout, setPersonalBulkWorkout] = useState([]);
    const [personalCutWorkout, setPersonalCutWorkout] = useState([]);
    const [bulkInformation, setBulkInformation] = useState([]);
    const [cutInformation, setCutInformation] = useState([]);
    const [confirmedWorkouts, setConfirmedWorkouts] = useState(0);
    const [displayBulkWorkout, setDisplayBulkWorkout] = useState([]);
    const [displayCutWorkout, setDisplayCutWorkout] = useState([]);
    const {token, setToken} = useToken();

    useEffect(() => {
        fetchAccounts();
        findWorkouts();
        confirmWorkouts();
    })

    const fetchAccounts = () => {
        fetchBulkAccounts();
        fetchCutAccounts();
    }

    const findWorkouts = () => {
        personalBulkWorkouts();
        personalCutWorkouts();
    }

    const confirmWorkouts = () => {
        if (personalBulkWorkout.length === 0 && personalCutWorkout.length === 0){
            setConfirmedWorkouts(0);
        } else if (personalBulkWorkout.length > 0 && personalCutWorkout > 0){
            setConfirmedWorkouts(2);
        } else {
            setConfirmedWorkouts(1);
        }
    }

    const setDisplayWorkouts = () => {
        if (displayBulkWorkout.length < 1 && displayCutWorkout.length <1){
            if (confirmedWorkouts === 1){
                if (bulkInformation.length > 1){
                    if (bulkInformation[0].current_day === 1){
                        setDisplayBulkWorkout(bulkInformation[0].chest);
                    } else if (bulkInformation[0].current_day === 2){
                        setDisplayBulkWorkout(bulkInformation[0].back);
                    } else if (bulkInformation[0].current_day === 3){
                        setDisplayBulkWorkout(bulkInformation[0].shoulder);
                    } else if (bulkInformation[0].current_day === 4){
                        setDisplayBulkWorkout(bulkInformation[0].legs);
                    } else if (bulkInformation[0].current_day === 5){
                        setDisplayBulkWorkout(bulkInformation[0].arms);
                    }  else if (bulkInformation[0].current_day === 6){
                        setDisplayBulkWorkout(bulkInformation[0].tabata);
                    } else {
                        setDisplayBulkWorkout(["Rest"]);
                    }
                } else {
                    if (cutInformation[0].current_day === 1){
                        setDisplayCutWorkout(cutInformation[0].chest);
                    } else if (cutInformation[0].current_day === 2){
                        setDisplayCutWorkout(cutInformation[0].back);
                    } else if (cutInformation[0].current_day === 3){
                        setDisplayCutWorkout(cutInformation[0].shoulder);
                    } else if (cutInformation[0].current_day === 4){
                        setDisplayCutWorkout(cutInformation[0].legs);
                    } else if (cutInformation[0].current_day === 5){
                        setDisplayCutWorkout(cutInformation[0].arms);
                    }  else if (cutInformation[0].current_day === 6){
                        setDisplayCutWorkout(cutInformation[0].tabata);
                    } else {
                        setDisplayCutWorkout(["Rest"]);
                    }
                }
            } else if (confirmedWorkouts === 2){
   
            }
        }
    }

    const chooseWorkout = (day) => {
        if (day === 0){
            return 'chest';
        } else if (day === 1){
            return 'back';
        } else if (day === 2){
            return 'shoulders';
        } else if (day === 4){
            return 'legs';
        } else if (day === 5){
            return 'arms';
        } else if (day === 6){
            return 'tabata';
        } else {
            return 'rest';
        }
    }

    const personalBulkWorkouts = () => {
        const exists = bulkInformation.filter((item) => (item.token === token));
        if (exists.length > 0) {
            setPersonalBulkWorkout(exists);
        }
    }

    const personalCutWorkouts = () => {
        const exists = cutInformation.filter((item) => (item.token === token));
        if (exists.length > 0) {
            setPersonalCutWorkout(exists);
        }
    }

    // Fetches body information from the database
    const fetchBulkAccounts = async() => {
    const response = await fetch("http://localhost:5555/bulk");
    const data = await response.json();
    setBulkInformation(data);
    }

    // Fetches body information from the database
    const fetchCutAccounts = async() => {
    const response = await fetch("http://localhost:5555/cut");
    const data = await response.json();
    setCutInformation(data);
    }

    const listBulkItems = displayBulkWorkout.map((num) =>
        <li key={num.toString}> {num} </li>
    );

    const returnPage = () => {
        if (confirmedWorkouts === 0){
            return (
                <h2>You currently have no workouts available. Please go to start your workout.</h2>
            )
        } else if (confirmedWorkouts === 1){
            if (personalBulkWorkout.length > 0){
                return (
                    <>
                    <h3>For Bulk: You are currently on: Day {personalBulkWorkout[0].current_day}.</h3>
                    <h4>Your next training is: {chooseWorkout(personalBulkWorkout[0].current_day)}</h4>
                    <WL weekday={personalBulkWorkout[0].current_day + 1} workout={personalBulkWorkout[0].chest} />
                    </>
                    )
            } else {
                return (
                    <>
                    <h3>For Cut: You are currently on: Day {personalCutWorkout[0].current_day}. Click here to continue.</h3>
                    <h4>Your next training is: {chooseWorkout(personalCutWorkout[0].current_day)}</h4>
                    <WL weekday={personalCutWorkout[0].current_day + 1} workout={personalCutWorkout[0].chest} />
                    </>
                )
            }
        } else {
            return (
                <>
                <h3>For Bulk: You are currently on: Day {personalBulkWorkout[0].current_day}. Click here to continue...</h3>
                <h4>Your next training is: {chooseWorkout(personalBulkWorkout[0].current_day)}</h4>
                <WL weekday={personalBulkWorkout[0].current_day + 1} workout={personalBulkWorkout[0].chest} />
                <h5>---------------------------------</h5>
                <h3>For Cut: You are currently on: Day {personalCutWorkout[0].current_day}. Click here to continue.</h3>
                <h4>Your next training is: {chooseWorkout(personalCutWorkout[0].current_day)}</h4>
                <WL weekday={personalCutWorkout[0].current_day + 1} workout={personalCutWorkout[0].chest} />
                </>
            )
        }
    }
   

    return (
        <>
    <h1>Resume Workout Page</h1>
    {returnPage()}
   
        </>
    )
}