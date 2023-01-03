import '../App.css';
import React, { Component } from 'react';
import  Login  from "./Login";
import  Register from "./Register";
import Home from './Home.js';
import About from './About.js';
import SNW from './SNW.js';
import RW from './RW.js';
import WH from './WH.js';
import OW from './OW.js';
import VWH from './Logout.js';



export default function NavBar() {
const path = window.location.pathname
return (
<nav className="nav">
<ul>
  <CustomLink href="/home">Home</CustomLink>
  <CustomLink href="/snw">Start New Workout</CustomLink>
  <CustomLink href="/rw">Resume Workout</CustomLink>
  <CustomLink href="/wh">Workout History</CustomLink>
  <CustomLink href="/ow">Outstanding Workouts</CustomLink>
  <CustomLink href="/about">About</CustomLink>
  <CustomLink href="/logout">Log Out</CustomLink>
</ul>
</nav>
)
}

function CustomLink({ href, children, ...props }) {
return (
<li>
<a href={href}>{children}</a>
</li>
)
}