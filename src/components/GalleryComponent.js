import React, { Component } from 'react';
import styled from 'styled-components';
import Request from 'superagent'

const ImageWrapper = styled.div`
width: 100%;
height: ${props => props.short ? '250px' : 'auto'};
margin-right: auto;
margin-left: auto;
overflow: ${props => props.short ? 'hidden' : 'hidden'};



`
const IMG = styled.div`
@media screen and (max-width: 500px) {
    width: 43%;
    height: 70px; 
}

    width: ${props => props.small ? '45%' : '31.5%'};
    height: ${props => props.small ? '70px' : '125px'};
    display: inline-block;
    margin:  5px;
    overflow: hidden;
    cursor: pointer;
  

`
const IMGpreviewer = styled.div`
@media screen and (max-width: 500px) {
    width: 100%;
 
}

    width: 100%;
    height: 100%;
    display: ${props => props.imagePreview ? 'block' : 'none'};
    cursor: pointer;
    position: fixed;
    top:0;
    left: 0;
    background-color: #000;
    text-align: center;
    overflow: hidden;
    padding: 40px;
  `
  const Exit = styled.p`
@media screen and (max-width: 500px) {
    left: 0;
    
 
}
      
    cursor: pointer;
    position: fixed;
    top:0;
    right: 5%;
    color: grey;
    font-size: 40px;
    margin-top: 100px;
  

`

  const Next = styled.p`

      
    cursor: pointer;
    position: fixed;
    top:0;
    right: 5%;
    color: grey;
    font-size: 40px;
    margin-top: 350px;
  

`
  const Prev = styled.p`

      
    cursor: pointer;
    position: fixed;
    top:0;
    left: 5%;
    color: grey;
    font-size: 40px;
    margin-top: 350px;
  

`
const imgStyle = {
   
  
     width:'100%',
    height: 'auto',
   
    

}
const imgPreviewStyle = {
   
  
     width:'auto',
    height: '100%',
 
   
    

}


export default class GalleryComponent extends Component {
constructor(){
    super()
    this.state = {
        images: [],
        imageObj: {},
        imagePreview: false,
        currentImage: '',
    }
}


componentWillMount(){
  var imageUrl= 'http://brandmaingerng.com/broj/wp-json/wp/v2/media'
Request.get(imageUrl).then((response)=> {
    this.setState({imageObj: response.body})
}).then(() => {
      var imageArray = [];
    var OBJ = this.state.imageObj
    var imageArrrayGet = OBJ.map(IMG => {
        imageArray.push(IMG.source_url)

    })
    this.setState({ images: imageArray})

})

  }

imageClick(e){
    this.setState({ currentImage: e.Image})
    this.setState({ imagePreview: true})
}

handleNext(e){
let imageArray = this.state.images
let currentImageIndex = imageArray.indexOf(e)
let index ;
if(currentImageIndex > imageArray.length-2 ){
index = 0
}else{
index = currentImageIndex + 1

}
this.setState({currentImage: imageArray[index]})
}


handlePrev(e){
let imageArray = this.state.images
let currentImageIndex = imageArray.indexOf(e)
let index;
if(currentImageIndex == 0){
index = imageArray.length - 1
}else{
index = currentImageIndex - 1

}
this.setState({currentImage: imageArray[index]})
}
 handleExit(e){
     this.setState({imagePreview: false})
 }


    render() {
         var DisplayImg = this.state.images.map(Image => {
        return (
             <IMG small= {this.props.small} key= {Image}  onClick= {this.imageClick.bind(this, {Image})}>
          <img src= {Image} style= {imgStyle} />
         </IMG>
        )
    })
    return (
        <div style= {{width: '100%',marginRight: 'auto', marginLeft: 'auto'}} >
      <ImageWrapper short={this.props.short}>
          {DisplayImg}
           </ImageWrapper>
        <IMGpreviewer imagePreview= {this.state.imagePreview}>
         <Prev onClick= {this.handlePrev.bind(this, this.state.currentImage)}>Prev</Prev> 
          <img src= {this.state.currentImage} className='prvIMG'  />
            <Next onClick= {this.handleNext.bind(this, this.state.currentImage)}>Next</Next>
            <Exit onClick= {this.handleExit.bind(this, 'hi')}>Exit</Exit>
        </IMGpreviewer>   
</div>
    )}
}