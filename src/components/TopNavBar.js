import React, { Component } from 'react';

export default class TopNavBar extends Component {

    render() {
    return (
        <div className='topnavbar'>
    <img src={require("../images/BROJFoundation.png")} alt="BROJ Foundation" className= 'logo'/>
    
    <div className='navigation'>

        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Beauty Paegent</li>
            <li>Contact Us</li>
        </ul>
    </div>

        </div>


    )}
}