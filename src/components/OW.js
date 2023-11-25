import React from 'react';

export default function OW() {
    return (
        <>
    <h1>Outstanding Workouts</h1>

    <h2>You have currently completed # workout days, and # workout days left! View your outstanding workouts below, in order: {/**/}</h2>
    
        <div className="history">
            <ul>
        <li>Week # Day #</li>
        <li>Week # Day #</li>
        <li>Week # Day #</li>
        <li>Week # Day #</li>
        <li>Week # Day #</li>
        <li>Week # Day #</li>
        <li>Week # and so on...</li>
            </ul>
        </div>
        </>
    )
}