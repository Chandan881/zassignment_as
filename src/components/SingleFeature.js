import React from 'react'
import "./Features.css"

const SingleFeature = (props) => {
  return (
    <React.Fragment>
    <div className='feature_img_one'>
    <div className='img_in_one'>
       <img className='feature_in_img' src={props.images} alt='images' />
    </div>
    <div className='img_one_about'>
       <div className='img_in_lorem'><p>Lorem Ipsum is the dummy text use to fill.</p></div>
       <div className='img_prc'>
         <h2>$16,471 </h2>
         <p>2088 sqft</p>
       </div>
    </div>
 </div>
    </React.Fragment>
  )
}

export default SingleFeature