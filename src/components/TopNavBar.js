import React, { Component } from 'react';

import {
  Link
 
} from 'react-router-dom'

export default class TopNavBar extends Component {
    constructor(){
        super()

        this.state = {
            menuClass: 'menu'
        }
    }
        handleMenuClass(){

            if(this.state.menuClass == 'menu'){
                           this.setState({
                menuClass: 'mobileMenu'
            })
            } else{
                   this.setState({
                menuClass: 'menu'
            })
            }
         
        }

    render() {
    return (
        <div className='topnavbar'>
  <Link to="/">  <img src={require("../images/BROJFoundation.png")} alt="BROJ Foundation" className= 'logo'/> </Link>
    <img id= 'mobileMenu' src={require("../images/menu.png")} alt="BROJ Foundation" onClick={this.handleMenuClass.bind(this)} /> 
    <div className='navigation'>

    
        <ul className= {this.state.menuClass}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="#">Projects</Link>
                <ul>
                    <li><Link to="/beauty-pageant">MHCR Pageant</Link></li>
                    <li><Link to="/cross-river-heritage-awards">CRHAwards</Link></li>
                </ul>

            </li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/blog">Blog</Link></li>
           
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </div>

        </div>


    )}
}