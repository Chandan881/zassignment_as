import React from 'react'
import "./Searchs.css"



const Search = () => {
  return (
    <div className='search_body'>
       <div className='search_container'>
           <div className='search_left'>
             <img className='search_in_img' src="https://us.123rf.com/450wm/nachai/nachai2108/nachai210800158/173760190-land-or-landscape-of-green-field-in-aerial-view-include-agriculture-farm-icon-of-residential-home.jpg?ver=6" alt="images1" />
           </div>
           <div className='search_right'>
              <div className='seacrch_right_content'>
                <h1 className='heading_cont'>
                  Discover Your Perfect 
                </h1>
                <h1 className='heading_conts'>
                   Plot of Land
                </h1>
                <p className='heading_below'>Starting at</p>
                <h1 className="heading_price"> ₹3999<span className='heading_spn'>per.sqft</span></h1>
                <input className='heading_search' type="text" placeholder='Search area or location' />
                <button className='heading_search_btn'>Search</button>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Search