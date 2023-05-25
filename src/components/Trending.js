import React from 'react'
import "./Trendings.css"

const Trending = () => {
  return (
    <div className='trending'>
      <div className='trending_left'>
        <div className='trending_in_one'>
           <h1 className='k_customers'>437k+</h1>
           <p className='H_customers'>Happy Customers</p>
        </div>
        <div className='trending_in_two'>
           <h1 className='N_customers'>340k+</h1>
           <p className='C_customers'>Landmark Near Chennai</p>
        </div>
        <div className='trending_in_three'>
           <h1 className='M_customers'>4.3m+</h1>
           <p className='D_customers'>Sq. Feet Developed</p>
        </div>
      </div>
      <div className='trending_right'>
        <div className='trending_out_left'></div>
        <div className='trending_out_right'>
           <img className='trend_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVVc3ksdKaf3FpHe4bjxxeAUk307i6sTiuA&usqp=CAU" alt='trend_img' />
        </div>
      </div>
    </div>
  )
}

export default Trending