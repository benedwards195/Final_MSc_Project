import React from 'react';
import '../App.css';

class Banner extends React.Component {
render() {
return (

<video loop autoPlay className="workout">
    <source src={require('../mp4/bentoverrow.mp4')} type="video/mp4" />
        </video>

);
}
}

export default Banner;