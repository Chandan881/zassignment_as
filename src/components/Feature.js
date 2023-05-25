import React from 'react'
import "./Features.css"
import SingleFeature from './SingleFeature'

const Feature = () => {
  return (
    <div className='feature'>
      <div className='feature_heading'><h1 className='feature_heading_in'>Feature Projects</h1></div>
      <div className='feature_navbars'>
        <ul className='feature_ul'>
          <li className='li_active'>Egmore</li>
          <li>Koyambedu</li>
          <li>Shollinganallur</li>
          <li>Choolamidu</li>
          <li>Royapettah</li>
        </ul>
      </div>
      <div className='features_all'>
          <SingleFeature images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfqn0kI5jIB_7Wn1sWBa4hmKhmvI2-c44uHw&usqp=CAU" />
          <SingleFeature images="https://media.gettyimages.com/id/1088862160/photo/corner-of-an-apartment-building-dubai-uae.jpg?s=612x612&w=gi&k=20&c=JdEz0tVJMEOJbkMxH0LD0w92AAYQH5l1qgRSYXJJRsc="/>
          <SingleFeature images="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDpDxuMvqUFLWrAz48DOvp1Zs2_f4H4C3L-A&usqp=CAU" />
          <SingleFeature images="https://media.istockphoto.com/id/1163919608/photo/eu-residential-apartment-house-home-building-complex-outdoor-facilities.jpg?s=612x612&w=is&k=20&c=LP80Kn6Ug_PmRWBg_QYwPUR6TVEk3PVMXzMJsFRq1CA="/>
      </div>
    </div>
  )
}

export default Feature