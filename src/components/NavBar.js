import '../App.css';
import React, { Component } from 'react';





export default function NavBar() {
const path = window.location.pathname
return (
<nav className="nav">
<ul>
  <CustomLink href="/home">Home</CustomLink>
  <CustomLink href="/snw">Start New Workout</CustomLink>
  <CustomLink href="/rw">Resume Workout</CustomLink>
  <CustomLink href="/wh">Workout History</CustomLink>
  <CustomLink href="/workoutlist">Workout Guidance</CustomLink>
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