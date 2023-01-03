import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "./useToken";

export default function Bulk({selected, setSelected}) {
    const [selects, setSelects]=useState(); 
    const {token, setToken} = useToken();
    const [accounts, setAccounts]=useState();
    const [bodyAccounts, setBodyAccounts]=useState([]);
    const [bulkInformation, setBulkInformation]=useState([]);
    const [workoutExists, setWorkoutExists]=useState(false);
    const [data, setData]=useState({
    gender: "",
    age: "",
    height: "",
    weight: "",
    neck: "",
    waist: ""
    
});
let navigate = useNavigate();
const [optimalWorkout, setOptimalWorkout]=useState([]);

// Obtains account and body information, and additionally bulk information to check that workout does not exist
useEffect(()=> {
    fetchAccounts();
    fetchBodyAccounts();
    fetchBulkInformation();
}, []);

// Fetches body information from the database
const fetchBodyAccounts = async() => {
    const response = await fetch("http://localhost:5555/body_details");
    const data = await response.json();
    setBodyAccounts(data);
}

// Obtains accounts information from the database
const fetchAccounts = async() => {
    const response = await fetch("http://localhost:5555/account_information");
    const data = await response.json();
    setAccounts(data);
}

// Obtains bulk information from the database
const fetchBulkInformation = async() => {
    const response = await fetch("http://localhost:5555/bulk");
    const data = await response.json();
    setBulkInformation(data);
}

// Adds body details to the database from the form
const addAccount = async (item) => {
    const response = await fetch("http://localhost:5555/body_details", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    const data = await response.json();  
}

// Adds bulk workout to the database
const addWorkout = async (item) => {
    const response = await fetch("http://localhost:5555/bulk", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    const data = await response.json();
}

// Tests for existing bulk workout
const testForExistingWorkout = () => {
    const exists = bulkInformation.filter((item) => (item.token === token));
    if (exists.length > 0) {
        setWorkoutExists(true);
    }
}

// Whenever a value is changed, submit it to the data
const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value });
    testForExistingWorkout();
}

const handleSubmit = (e) => {
    e.preventDefault();

    const account = accounts.filter((item) => (item.token === token)); 
        const newAcc = {
            name: account.name,
            gender: selects,
            age: data.age,
            height: data.height,
            weight: data.weight,
            neck: data.neck,
            waist: data.waist,
            token: token
        }

        // implement new workout here
        const optimalWorks = defineOptimalWorkout();

        const newBulkWorkout = {
            token: token,
            start_date: "22/12/2022",
            current_day: 1,
            chest: optimalWorks[0],
            back: optimalWorks[1],
            shoulder: optimalWorks[2],
            legs: optimalWorks[3],
            arms: optimalWorks[4],
            tabata: optimalWorks[5],
            completed: false
        }
        addAccount(newAcc);
        addWorkout(newBulkWorkout);
        navigate('/home');
}

// Designs optimal workout for the given age
const defineOptimalWorkout = () => {
    const workouts = defineAgeWorkout(data.age);
    const finalWorkout = defineRepAge(data.age, workouts);
    setOptimalWorkout(finalWorkout);
    return finalWorkout;
}

// Designs workout based on the given age
const defineAgeWorkout = (currAge) => {
    //Connect to database and randomise
    if (parseInt(currAge) >= 18 && parseInt(currAge) <= 80){
        const workout = [
            // chest
            {
                flat_bench_press: {
                    weight: 0,
                    reps: 0
                }
            }, 
            // back
            {
                deadlift: {
                    weight: 0,
                    reps: 0
                }
            }, 
            // Shoulders 
            {
                standing_shoulder_press: {
                    weight: 0,
                    reps: 0
                }
            }, 
            // legs 
            {
                squats: {
                    weight: 0,
                    reps: 0
                }
            }, 
            // arms
            {
                standing_biceps_curl: {
                    weight: 0,
                    reps: 0
                }
            }, 
            //tabata
            {
                press_ups: {
                    weight: 0,
                    reps: 0
                }
            }
        ]
        return workout;
    } else{
        return [];
    }
}

// Designs the reps per workout depending on the age
const defineRepAge = (currAge, currWorkout) => {
    // Return json file with current workout reps, use NOTEPAD
    switch (true){
        case (parseInt(currAge) <= 25):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 35):
            currWorkout[0].flat_bench_press.weight = 20;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 20;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 20;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 40):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 45):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 50):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 55):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 60):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 65):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 70):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 75):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        case (parseInt(currAge) <= 80):
            currWorkout[0].flat_bench_press.weight = 10;
            currWorkout[0].flat_bench_press.reps = 10;
            currWorkout[1].deadlift.weight = 40;
            currWorkout[1].deadlift.reps = 10;
            currWorkout[2].standing_shoulder_press.weight = 20;
            currWorkout[2].standing_shoulder_press.reps = 10;
            currWorkout[3].squats.weight = 20;
            currWorkout[3].squats.reps = 10;
            currWorkout[4].standing_biceps_curl.weight = 10;
            currWorkout[4].standing_biceps_curl.reps = 10;
            currWorkout[5].press_ups.weight = 10;
            currWorkout[5].press_ups.reps = 10;
            break;
        default:
            console.log("no data provided");
            break;
    }

    const newWorkout = currWorkout;

    return newWorkout;
}

// If the workout exists, do not allow for the form to be displayed
if (workoutExists === true) {
    return (
        <>
            <h1><em>The current Bulk workout has been already started and is in progress.</em></h1>
            <h3><em>Please complete it before initiating the new one.</em></h3>
        </>
    )
}

// Displays the page
    return (
        
    <div>  
    <h1>Bulk</h1>
    <h2>Enter Details</h2>
    <form className="register-form" onSubmit={handleSubmit}>
  
<label>Body Gender</label>
<select value={selects} onChange={e=>setSelects(e.target.value)}>
   <option disabled>Choose Option</option>
   <option>Male</option>
   <option>Female</option>
   
</select>

<label>Age</label>
<input value={data.age} onChange={handleChange} type="text" placeholder="Age" id="age" name="age" required />
<label>Height (cm)</label>
<input value={data.height} onChange={handleChange} type="height" placeholder="Height" id="height" name="height" required />
<label>Weight (kg)</label>
<input value={data.weight} onChange={handleChange} type="weight" placeholder="Weight" id="weight" name="weight" required />
<label>Neck (cm)</label>
<input value={data.neck} onChange={handleChange} type="neck" placeholder="Neck (inches)" id="neck" name="neck" required />
<label>Waist (cm)</label>
<input value={data.waist} onChange={handleChange} type="waist" placeholder="Waist" id="waist" name="waist" required /> 

<button type="submit">Submit</button>
</form>
</div>
    )
};