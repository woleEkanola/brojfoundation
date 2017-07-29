import React, { Component } from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
background-color: #90278E;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 40px;
  color: #fff;
  display: flex;
   justify-content: space-between;
   padding: 5px 40px ;

`

;

export default class Footer extends Component {

    render() {
    return (
       <FooterWrapper> 
             <p>© 2017 BROJ Foundation</p>
             <span> 
               <img src={require("../images/facebook.png")} className= 'socialIcons' />
               <img src={require("../images/twitter.png")} className= 'socialIcons' />
               <img src={require("../images/instagram.png")} className= 'socialIcons' />

</span>
             <p>Built With Love by BrandMainger</p>
            
           </FooterWrapper>


    )}
}