

import styled from 'styled-components';

export const Background = styled.div`

  
  width: 100%;
   background-image: url(${require("../images/blckbgr.jpg")});
  background-position: center;
  background-size: 100%;
background-attachment: fixed;
   height: 100%;
     padding:3% 0;
z-index: -3;

`;

export const ContentWrapper = styled.div`

  
   height: auto; 
   width: 90%; 
   background-color: rgba(0, 0, 0, 0.8);
      margin: auto;

     z-index: -1;
     color: #fff;
     font-size: 20px;
     padding: 40px ;
     padding-top: 20px;
    display: flex;

    

`
export const BigWrapper = styled.div`

  
   height: auto; 
   width: 63%; 
   color: #fff;
   font-size: 20px;
   text-align: justify;
   flex-grow: 1;
 

`
export const SmallWrapper = styled.div`

  
   height: auto; 
   width: 33%; 
   color: #D2D3D5;
   font-size: 20px;
   text-align: justify;
   margin-left: 30px;
   background-color: rgba(144, 39, 142, 0.3);
   padding: 10px 40px;
    

`
;