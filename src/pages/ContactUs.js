import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import LatestBlogPost from '../components/LatestBlogPost';
import GalleryComponent from '../components/GalleryComponent';
import {Background, ContentWrapper, BigWrapper, SmallWrapper} from '../components/Background';
import Request from 'superagent'

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contactUs">
      <TopNavBar /> 
        <Background>
          <PageTitle>
Contact Us

</PageTitle>

          <ContentWrapper>
    

<BigWrapper>
 
  </BigWrapper>
  <SmallWrapper> 
      <GalleryComponent small />
      <hr />
 
  </SmallWrapper>
  </ContentWrapper>
</Background>
     <Footer />
      </div>
     
    );
  }
}

