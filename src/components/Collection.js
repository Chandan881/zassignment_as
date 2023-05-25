import React from 'react'
import "./Collections.css"

const Collection = () => {
  return (
    <div className='collection'>
      <div className='collection_left'>
        <div className='collection_explore'>
           <h1 className='explore_in'>Explore Our Collections</h1>
        </div>
        <div className='collection_explore_img'>
           <img className='collect_img' src="https://i.pinimg.com/originals/52/35/14/523514b27147f2552e727666a078b29d.jpg" alt='img' />
        </div>
      </div>
      <div className='collection_right'>
        <img className='collect_in_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2SooHLjQz3Km1zJWe7vmjUVqtpnC5fonTg&usqp=CAU" alt='img' />
        <img className='collect_in_img' src="https://jkbhousing.com/jb-content/uploads/2022/06/anantha-jkb.jpg" alt='img' />
        <img className='collect_in_img' src="https://assets-news.housing.com/news/wp-content/uploads/2022/03/28143140/Difference-between-flat-and-apartment.jpg" alt='img' />
      </div>
    </div>
    
  )
}

export default Collection