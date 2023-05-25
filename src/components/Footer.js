import React from 'react'
import "./Footers.css";
import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer_left'>
          <h1>Discover<br></br>Plots</h1>
          <p className='footer_left_dummy'>Lorem ipsum is the dummy text</p>
          <p className='footer_left_copy'>CopyRight by @Chandan</p>
       </div>
       <div className='footer_right'>
         <div className='footer_right_up'>
            <div className='footer_right_up_one'>
               <h3>Company</h3>
               <p>Contact</p>
            </div>
            <div className='footer_right_up_two'>
                <h3>Who We Help</h3>
                <ul>
                   <li>Customers</li>
                   <li>Brokers</li>
                   <li>Lenders</li>
                </ul>
            </div>
            <div className='footer_right_up_three'>
                <h3>Follow Us</h3>
                <div className='for_icons'>
                  <div className='icon'><FaFacebookSquare /></div>  
                  <p>FaceBook</p>
                </div>
                <div className='for_icons'>
                  <div className='icon'><FaInstagramSquare /></div>  
                  <p>Instagram</p>
                </div>
            </div>
         </div>
         <div className='footer_right_down'>
            <p>Privacy Policy</p>
            <p>Privacy Collection Notice</p>
            <p>Terms</p>
         </div>
       </div>
    </div>
  )
}

export default Footer