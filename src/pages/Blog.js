import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import LatestBlogPost from '../components/LatestBlogPost';
import GalleryComponent from '../components/GalleryComponent';
import {Background, ContentWrapper, BigWrapper, SmallWrapper, TextWrapper} from '../components/Background';
import Request from 'superagent'
import styled from 'styled-components';

const H1 = styled.h1`
color: #fff;
font-size: 30px

`

export default class Blog extends Component {
  render() {
    return (
      <div className="Blog">
      <TopNavBar /> 
        <Background>
          <PageTitle>
Blog

</PageTitle>

          <ContentWrapper>
    

<BigWrapper>
  <TextWrapper>
    <H1>Our Blog is currently under construction</H1>
  </TextWrapper>
  </BigWrapper>
  <SmallWrapper> 
    <GalleryComponent small />  
      <hr />
  
  </SmallWrapper>
  </ContentWrapper>
    <Footer />
</Background>
   
      </div>
     
    );
  }
}

