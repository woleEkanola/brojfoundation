import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import LatestBlogPost from '../components/LatestBlogPost';
import Gallery from '../components/Gallery';
import {Background, ContentWrapper, BigWrapper, SmallWrapper} from '../components/Background';
import Request from 'superagent'

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
  </BigWrapper>
  <SmallWrapper> 
      
      <hr />
      <Gallery />
  </SmallWrapper>
  </ContentWrapper>
</Background>
     <Footer />
      </div>
     
    );
  }
}

