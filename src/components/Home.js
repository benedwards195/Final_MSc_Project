import React from 'react';
import '../App.css';
import Banner from './Banner.js';
import Affirmations from './Affirmations.js'
import Weekly from './Weekly';

export default function Home() {


 
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