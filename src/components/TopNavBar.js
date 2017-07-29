import React, { Component } from 'react';

import {
  Link
 
} from 'react-router-dom'

export default class TopNavBar extends Component {

    render() {
    return (
        <div className='topnavbar'>
  <Link to="/">  <img src={require("../images/BROJFoundation.png")} alt="BROJ Foundation" className= 'logo'/> </Link>
    
    <div className='navigation'>

        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>Projects</li>
            <li><Link to="/beauty-pageant">Beauty Paegent</Link></li>
            <li><Link to="/cross-river-heritage-awards">CRHAwards</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </div>

        </div>


    )}
}