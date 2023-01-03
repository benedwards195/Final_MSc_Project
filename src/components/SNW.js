import React, { Component,useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GallerySlider } from './GallerySlider';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export default function SNW() {

    return (
        <>
        <h1>Start New Workout</h1>
        <h2>Do you want to?</h2>
        <div>
         <button className="ex"><Link to='/bulk'>Bulk</Link></button> 
        <button className="ex"><Link to='/cut'>Cut</Link></button> 

        <div className="definitions">
        <h4>Key words defined:</h4>
         <li>Bulk: To gain muscle mass</li>
         <li>Cut: To get rid of body fat</li>
        </div>
        <i>*Insert random picture generator here*</i>
        </div>
        </>
    )
    
    };    


