import React, { Component } from 'react';



import { Carousel } from 'antd';
import {Background, ContentWrapper, BigWrapper, SmallWrapper} from '../components/Background';
import GalleryComponent from '../components/GalleryComponent';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />

       <Carousel autoplay>
    <div className='sldr1'><div><h3 className= 'up'>Educate a girl,</h3><h3 className= 'dw'> empower a nation …</h3></div></div>
    <div className='sldr2'><div><p>We believe that girls are the future mothers of any society and every girl child that receives an education is more likely to make education a priority for her children.</p> 
    <p>It’s a ripple effect of positive change in the community and country.</p></div></div>
    <div className='sldr3'><div><p>We make the underprivileged girl children capable so that they can compete and come at-par with this fast growing community.</p></div></div>
   
  </Carousel>

       <div className= 'ourFocus'>
         <div>
         <h1>Our focus</h1>
         <p>Our focus is to provide education and proper health facilities to the girl-child. We work as a catalyst and provide the basic requirements of life such as food, clothing, shelter, education and health to the needy children.
</p>
</div>
       </div>
        <Background >
          <div className= 'donate'>
          <h1>  Let's change lives together... </h1> <button>Donate</button>
           </div>
          
           <div className= 'lstsgmnt'>
            <div className='vision'> <h1>What we do</h1>
            <p>We organize both formal and informal trainings. </p>
            <p>  We make sure that a girl child gets proper education and medical facilities. We also help to provide books for classrooms and libraries, as well as teaching resources, such as stationery, chalk and blackboards.</p>
            <p>   We work closely with the girl-child after they leave school to help them in the vulnerable period between childhood and adulthood. </p>
            <p>  We prepare them for tertiary education, including teacher training college, nursing and university by organizing Pre-Jamb Lessons and tutorials; we also offer various degree of skills acquisition and empowerment trainings to engage them during the highly vulnerable lengthy wait between exams and results. Royal Jewel offers training, finance, and peer support at this critical juncture.</p>
            </div>
            <div className= 'blog'>
              <h1>Latest Blog Post</h1>
              <h3>Our FIrst Blog post</h3>
              <p>We organize boganize botth fganize botganize botganize botganize botganize botormal aganize botnd informal trainings. </p>
              <hr />
              <h3>We are the best</h3>
              <p>We organizerk closely with the girlrk closely with the girl both formal and informal trainings. </p>
              <hr />
              <h3>We always win</h3>
              <p>We organize both formal ark closely with the girlrk closely with the girlrk closely with the girlnd informal trainings. </p>
              <hr />
              <h3>Na Only me waka come </h3>
              <p>We organize both formal ark closely with the girlrk closely with the girlrk closely with the girlnd informal trainings. </p>
              
              </div>
                   <div> 
                     <h1>Photo Gallery</h1>
                      <GalleryComponent small />
                      </div>

           </div>
            </Background>
           <Footer />
      </div>
     
    );
  }
}

