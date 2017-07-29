import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import LatestBlogPost from '../components/LatestBlogPost';
import Gallery from '../components/Gallery';
import {Background, ContentWrapper, BigWrapper, SmallWrapper} from '../components/Background';
import Request from 'superagent'

export default class CRHAwards extends Component {
  render() {
    return (
      <div className="CRHAwards">
     <TopNavBar /> 
        <Background>
          <PageTitle>
Cross River Heritage Awards

</PageTitle>

          <ContentWrapper>
    

<BigWrapper>
  </BigWrapper>
  <SmallWrapper> 
      <LatestBlogPost />
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

