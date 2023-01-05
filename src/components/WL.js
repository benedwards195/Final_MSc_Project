import {useState} from 'react';

export default function WL({weekday, workout}) {
const [workouts, setWorkouts] = useState(workout);



if (weekday === 1) {
    return (
        <>
        <h6>Day 1: Chest</h6>
        <div className='listOfWorkouts' >
        {Object.keys(workouts).map((key, index) => {
            return (
                <div key={index}>
                    <p>Workout type: <em>{key}</em>, reps: <em>{workouts[key]}</em></p>
                </div>
            )
        })}
        </div>
        </>
    )
} else if (weekday === 2) {
    return (
        <>
        <h6>Day 2: Back</h6>
        <div className='listOfWorkouts' >
        {Object.keys(workouts).map((key, index) => {
            return (
                <div key={index}>
                    <p>Workout type: <em>{key}</em>, reps: <em>{workouts[key]}</em></p>
                </div>
            )
        })}
        </div>
        </>
    )
} else if (weekday === 3) {
    return (
        <>
        <h6>Day 3: Shoulders</h6>
        <div className='listOfWorkouts' >
        {Object.keys(workouts).map((key, index) => {
            return (
                <div key={index}>
                    <p>Workout type: <em>{key}</em>, reps: <em>{workouts[key]}</em></p>
                </div>
            )
        })}
        </div>
        </>
    )
} else if (weekday === 4) {
    return (
        <>
        <h6>Day 4: Legs</h6>
        <div className='listOfWorkouts' >
        {Object.keys(workouts).map((key, index) => {
            return (
                <div key={index}>
                    <p>Workout type: <em>{key}</em>, reps: <em>{workouts[key]}</em></p>
                </div>
            )
        })}
        </div>
        </>
    )
} else if (weekday === 5) {
    return (
        <>
        <h6>Day 5: Arms</h6>
        <div className='listOfWorkouts' >
        {Object.keys(workouts).map((key, index) => {
            return (
                <div key={index}>
                    <p>Workout type: <em>{key}</em>, reps: <em>{workouts[key]}</em></p>
                </div>
            )
        })}
        </div>
        </>
    )
} else if (weekday === 6) {
    return (
        <>
        <h6>Day 6: Tabata</h6>
        <div className='listOfWorkouts' >
        {Object.keys(workouts).map((key, index) => {
            return (
                <div key={index}>
                    <p>Workout type: <em>{key}</em>, reps: <em>{workouts[key]}</em></p>
                </div>
            )
        })}
        </div>
        </>
    )
} else if (weekday === 7) {
    return (
        <h6>Day 7: Rest</h6>
    )
};
    return (
        <p>No day specified</p>
    )
}