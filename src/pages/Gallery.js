import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import GalleryComponent from '../components/GalleryComponent';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import {Background, ContentWrapper, BigWrapper, SmallWrapper, TextWrapper} from '../components/Background';


export default class Gallery extends Component {
  render() {
    return (
      <div className="Blog">
      <TopNavBar /> 
        <Background>
          <PageTitle>
Photo Gallery

</PageTitle>

          <ContentWrapper>
    

<BigWrapper>
  <GalleryComponent />
    
 
  </BigWrapper>
  <SmallWrapper> 
      

  
  </SmallWrapper>
  </ContentWrapper>
    <Footer />
</Background>
   
      </div>
     
    );
  }
}

