

import styled from 'styled-components';


export const Background = styled.div`
@media screen and (max-width: 500px) {
    height: 100%;
}

     min-height: 650px;
    height: 100%;
  width: 100%;
   background-image: url(${require("../images/blckbgr.jpg")});
  background-position: center;
  background-size: 100%;
background-attachment: fixed;
background-repeat: repeat;
 
     padding:3% 0;
z-index: -3;

`;

export const ContentWrapper = styled.div`
@media screen and (max-width: 500px) {
    width: 100%;
    padding: 5px;
     padding-top: 200px;
     height: 100%; 
}
  
   height: inherit; 
   width: 90%; 

      margin: auto;

     z-index: -1;
     color: #fff;
   
     padding: 40px ;
     padding-top: 200px;
    display: flex;

    

`
export const BigWrapper = styled.div`
@media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 30px;
}
     background-color: rgba(66, 3, 65, 0.8);
    width: 63%; 
  height: 100%;
   color: #fff;
   
   flex-grow: 1;

 

`
export const SmallWrapper = styled.div`

   @media screen and (max-width: 500px) {
    display: none
}
   width: 33%; 
 
   margin-left: 30px;
   background-color: rgba(0, 0, 0, 0.8);
   padding: 10px 40px;
    

`
export const TextWrapper = styled.div`
 @media screen and (max-width: 500px) {
    font-size: 12px;
   text-align: left;
     height: auto; 
     padding-bottom: 30px;
}

   height: inherit; 
   width: 100%; 
   font-size: 20px;
   text-align: justify;

     color: #D2D3D5;
 
  
   padding: 10px 40px;
    

`
;