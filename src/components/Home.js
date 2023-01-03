import React from 'react';
//import centralpark from '../mp4/centralpark.mp4';
import '../App.css';
import Banner from './Banner.js';
import Affirmations from './Affirmations.js'
import Weekly from './Weekly';

export default function Home() {

//const banner = <video autoplay muted loop> <video class='banner' alt='workout video' src='/mp4/centralpark.mp4'/>
  //</video>
 
return (
<>
<h2>Hi, Welcome to BT Fitness</h2>
<div className="home">
<h1>Home</h1>
<h3>Achieve your fitness goals in quick time here!!!</h3>
<Banner/>
<Affirmations/>
</div>
</>
);
}