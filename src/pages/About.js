import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import LatestBlogPost from '../components/LatestBlogPost';
import GalleryComponent from '../components/GalleryComponent';
import {Background, ContentWrapper, BigWrapper, SmallWrapper, TextWrapper} from '../components/Background';
import Request from 'superagent'

export default class About extends Component {

 constructor(){
    super()
this.state={

}
  }

  componentWillMount(){
   var blogUrl= 'http://brandmaingerng.com/broj/wp-json/wp/v2/posts'
  Request.get(blogUrl).then((response) => {

   this.setState({   data: response.body   })

 } )
  }
  render() {
  
    return (
      <div className="About">
          <TopNavBar /> 
        <Background>
          <PageTitle>
 About Us

</PageTitle>

          <ContentWrapper>
    

<BigWrapper>
  <TextWrapper>
<p>The Blessed Royal Jewel Foundation is a registered non-profit organization tackling poverty and inequality by 
  supporting the girl-child to go to school and succeed, and empowering young women to step up as leaders of change.
   We believe that girls are the future mothers of any society and every girl child that receives an education is 
   more likely to make education a priority for her children. It’s a ripple effect of positive change in the community 
   and country.</p>
    <p>Our organisation is dedicated to work for the overall improvement of the girl-child including education, 
      sanitation, health, income generation, AIDS awareness and other major issues. We make the underprivileged 
      girl children capable so that they can compete and come at-par with this fast growing community.</p> 
      <p>We work with well-established implementing partners and volunteers who have a long history of delivering 
        high quality education programs across Nigeria to provide a better future to the girl-child.</p> 
        <p>We derive our strength, inspiration and passion from our motto which says “educate a girl,
           empower a nation.</p>
           </TextWrapper>
  </BigWrapper>
  <SmallWrapper> 
      <LatestBlogPost />
      <hr />
   <GalleryComponent  small short/>
  </SmallWrapper>

  </ContentWrapper>
</Background>
     <Footer />
      </div>
     
    );
  }
}

