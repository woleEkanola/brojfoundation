import React, { Component } from 'react';

import TopNavBar from '../components/TopNavBar';
import PageTitle from '../components/PageTitle';
import Footer from '../components/Footer';
import LatestBlogPost from '../components/LatestBlogPost';
import GalleryComponent from '../components/GalleryComponent';
import {Background, ContentWrapper, BigWrapper, SmallWrapper, TextWrapper} from '../components/Background';
import Request from 'superagent'


export default class BeautyPageant extends Component {
  render() {
    return (
      <div className="BeautyPageant">
   <TopNavBar /> 
        <Background>
          <PageTitle>
MISS HERITAGE CROSS RIVER 2017

</PageTitle>

          <ContentWrapper>
    

<BigWrapper>
  <img src={require("../images/MHCR.jpg")} className= 'mhcr' />
<TextWrapper>
 <p> Miss Heritage Cross River is an educational and humanitarian based event that seeks to celebrate beauty, culture, talent and intellectual abilities of young girls within the ages of 18-28 who are indigenes of Cross River State. The MHCR Beauty Pageant will be one of the most prestigious pageants in existence today and will become a vehicle for personal development and promotion of cultural appreciation in Cross River State.</p>
<p>Our pageant is decent (no appearance in swimsuits by delegates) and holds to the highest standards of integrity and conducts its pageants in a fair and unbiased manner.</p>
<p>The aim of this unprecedented event is to provide a positive space to celebrate our dynamic and rich cultural heritage while providing a platform for the participants to showcase their innate talents.</p>
<p>The winner of the MHCR will be a role model and inspiration to other young girls in Cross River State, helping them believe in themselves and promoting girl-child education and empowerment.</p>
<p>Amongst other prizes, the winner of MHCR will represent Cross River State at the Miss Heritage Nigeria Beauty Pageant and leads the Charity campaigns of the Blessed Royal Jewel Foundation.</p>
<p>25% of the revenue from the event will be used to send under-privileged girls from Cross River State back to school</p>
<h3>WHO IS ELIGIBLE TO PARTICIPATE? </h3>
<ul>
<p>Applicant must be an indigene of Cross River State or must have resided within Cross River for a period of 10 years</p>
<p>Applicants must be between the ages of 18- 28 </p>

</ul>

<h3>REGISTRATION</h3>
<p>Registration details coming soon ! </p>


  
   </TextWrapper>

  </BigWrapper>
  <SmallWrapper> 
      <LatestBlogPost />
      <hr />
      <h1>Our Galllery</h1>
       <GalleryComponent  small short/>
  </SmallWrapper>
  </ContentWrapper>
</Background>
     <Footer />
      </div>
     
    );
  }
}

