import React, { Component } from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
@media screen and (max-width: 500px) {
margin-top:45px;
height: 100px;
padding-top: 50px;
text-align: center;
}
width: 100%;
height: 100px;
margin: auto;
margin-top: 40px;
background: rgba(144, 39, 142, 0.9);
text-align: left;
padding: 30px 0;

position: fixed;



`;

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css?family=Bree+Serif|Pacifico|Work+Sans');
@media screen and (max-width: 500px) {
font-size: 20px;
margin-left: 0; 
}
font-family: 'Bree Serif', serif;
font-size: 40px;
margin-left: 200px; 
color: #fff;
text-shadow: 1px 2px 1px #000
`;

export default class PageTitle extends Component {

    render() {
    return (
        <TitleWrapper>   
        <Title>  { this.props.children     }   </Title> 

        </TitleWrapper>


    )}
}