import React, { Component } from 'react';
import { ReactRpg } from 'react-rpg';

const images = [
  {
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/IMG-20150720-WA012.jpg",
    clickHandler: (url, obj) => { console.log(url) }
  },
  {
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/IMG-20150717-WA015.jpg",
    clickHandler: (url, obj) => { console.log(obj) }
  },
 {
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/DSC_3375.jpg",
    clickHandler: (url, obj) => { console.log(url) }
  },
  {
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/BIRHTDAY_IMAGES-5.jpg",
    clickHandler: (url, obj) => { console.log(obj) }
  },
{
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/IMG-20150720-WA012.jpg",
    clickHandler: (url, obj) => { console.log(url) }
  },
  {
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/IMG-20150717-WA015.jpg",
    clickHandler: (url, obj) => { console.log(obj) }
  },
 {
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/DSC_3375.jpg",
    clickHandler: (url, obj) => { console.log(url) }
  },
  {
    url: "http://brandmaingerng.com/broj/wp-content/uploads/2017/07/BIRHTDAY_IMAGES-5.jpg",
    clickHandler: (url, obj) => { console.log(obj) }
  }
];



export class SocialMediaPreview extends Component {

    render() {
    return (
        <div>
<ReactRpg imagesArray={images} columns={[ 3, 3, 3 ]} padding={10} />

        </div>


    )}
}

export class SocialMediaIcons extends Component {

    render() {
    return (
        <div>
Social Media Icons

        </div>


    )}
}
