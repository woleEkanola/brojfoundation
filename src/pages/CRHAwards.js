import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import LatestBlogPost from '../components/LatestBlogPost';
import {Background, ContentWrapper, BigWrapper, SmallWrapper, TextWrapper} from '../components/Background';
import Request from 'superagent'
import GalleryComponent from '../components/GalleryComponent';
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
  <TextWrapper>
    <p>
The Cross River Heritage Awards is an annual event packaged by the Blessed Royal Jewel Foundation that recognizes and profile men and women, leaders and peace builders creating change at the grassroots to national levels and have become a vehicle for personal development and promotion of the cultural appreciation in Cross River State. 
  </p></TextWrapper>
  </BigWrapper>
  <SmallWrapper> 
      <LatestBlogPost />
      <hr />
<GalleryComponent small />
  </SmallWrapper>
  </ContentWrapper>
</Background>
     <Footer />
      </div>
     
    );
  }
}

