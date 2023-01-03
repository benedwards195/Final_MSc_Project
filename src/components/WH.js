import React, {useState, useEffect} from 'react';
import WL from './WL';
import useToken from './useToken';


export default function WH() {
const [history, setHistory] = useState([]);
const [personalHistory, setPersonalHistory] = useState([]);
const {token, setToken} = useToken();
const [chest, setChest] = useState();
const [back, setBack] = useState();
const [shoulder, setShoulder] = useState();
const [legs, setLegs] = useState();
const [arms, setArms] = useState();
const [tabata, setTabata] = useState();
const [loaded, setLoaded] = useState(false);
const [validated, setValidated] = useState(false);

const currentHistory = (id) => {
    setChest(personalHistory[id].chest)
    setBack(personalHistory[id].back)
    setShoulder(personalHistory[id].shoulder)
    setLegs(personalHistory[id].legs)
    setArms(personalHistory[id].arms)
    setTabata(personalHistory[id].tabata)
}

useEffect(() => {
    if (history.length === 0){
        fetchHistory();
    } 
    validatePersonalHistory();
}); 

const validateHistory = () => {
    const account = history.filter((item) => (item.token === token));
        setPersonalHistory(account);
        if (personalHistory.length > 0) {
            currentHistory(0);
            setValidated(true);
        }    
}

const fetchHistory = async () => {
    
        const response = await fetch('http://localhost:5555/workout_history');
        const data = await response.json();
        setHistory(data);
        setLoaded(true); 
}

const validatePersonalHistory = () => {
    if (history.length > 0) {
        const account = history.filter((item) => (item.token === token));
        
        setPersonalHistory(account);
        validateHistory();
    }
}

if (!validated) {
    
    return <h1>Loading...</h1>
}

    return !loaded ? <h1>loading...</h1> : (
        <>
    <h1>Workout History</h1>
    <h3>Here is your workout journey so far. You have completed {personalHistory.length} sessions, with {8 - personalHistory.length} sessions remaining. Keep going!</h3>

    <div className="history">
    <ul>
        <WL weekday={1} workout={chest} />
        <WL weekday={2} workout={back} />
        <WL weekday={3} workout={shoulder} />
        <WL weekday={4} workout={legs} />
        <WL weekday={5} workout={arms} />
        <WL weekday={6} workout={tabata} />
        <WL weekday={7} />
    </ul>
    </div>
        </>
    )
}