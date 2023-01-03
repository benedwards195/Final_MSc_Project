import React from 'react';
//import centralpark from '../mp4/centralpark.mp4';
import '../App.css';

class Banner extends React.Component {
render() {
return (
//<video width="100%" height="10%" preload='auto'>
//<source src={centralpark} type="video/mp4" autoPlay loop muted />
// </video>
<video loop autoPlay className="workout">
    <source src={require('../mp4/bentoverrow.mp4')} type="video/mp4" />
        </video>

);
}
}

export default Banner;