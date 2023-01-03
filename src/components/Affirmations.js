import '../App.css';
import React, { useState } from "react";

// String array of inspiring mantras
const motivation = [
  "Don't count the days, make the days count - Muhammad Ali",
  "As I exercise my body, my body will repay me with extra years of good health - https://wildsimplejoy.com/affirmations-for-health-fitness/",
  "I deserve to feel healthy and vibrant - wildsimplejoy.com/affirmations-for-health-fitness/",
  "He that is good for making excuses is seldom good for anything else — Benjamin Franklin",
  "All I Need to Do is Start, The Rest Will Come - fitonapp.com/fitness/fitness-mantras/",
  "Impossible is nothing - Adidas",
  "Float like a butterfly, sting like a bee - Muhammad Ali",
  "I Love My Body and Want to Give it What it Needs - fitonapp.com/fitness/fitness-mantras/",
  "Today I will do what others won't, so tomorrow I can accomplish what others can't - Jerry Rice",
  "All progress takes place outside your comfort zone - Michael John Bobak",
  "Don't quit. Suffer now, and live the rest of your life as a champion - Muhammad Ali"
];

// The getRandomAffirmation function registers and returns the 'motivation' array   
const getRandomAffirmation = () => {
  // The in-built 'Math.random()' function will filter through the 
  // entire length of the motivation array, and return one of the strings at random
  return motivation[Math.floor(Math.random() * motivation.length)];  
};

function Affirmations() {
  // affirmation and setRandomAffirmation functions have been assigned to display and track the state of the
  // getRandomAffirmation() function, respectively. 
  const [affirmation, setRandomAffirmation] = useState(getRandomAffirmation());
  // The handleClick function tracks the up to date progress of the 'getRandomAffirmation' function.
  const handleClick = () => {
    // The randomAffirmation variable is assigned to invoke the getRandomAffirmation function.
    const randomAffirmation = getRandomAffirmation();
    // setRandomAffirmation takes in randomAffirmation as a parameter, so it can track the randomised mantra
    // from the motivation array.
    setRandomAffirmation(randomAffirmation);
  };

  return (
    <div className="Affirmations">
    <h1>Select Inspiration</h1>
    {/*The affirmation hook is passed into the heading tag, which displays the mantra 
    that has been selected at random.*/}
      <h2>{affirmation}</h2>
      {/* handleClick function gets passed into the onClick function within 'button'.*/}
      {/* Once users click on button, the randomised motivation array will be tracked, 
      then manifested in the affirmation heading.'.*/}
      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default Affirmations;