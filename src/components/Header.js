import React from 'react'
import "./Headers.css"

const Header = () => {
  return (
    <div className='header'>
       <div className='navbar'>
         <div className='logo'><h3>Discover<br></br>Plot</h3></div>
         <div className='nav_options'>
           
           <ul>
             <li>Projects</li>
             <li>Agents</li>
             <li>Amenities</li>
             <li>SignIn</li>
             <li>|</li>
           </ul>
           <button>Schedule a Call</button>
         </div>
       </div>
    </div>
  )
}

export default Header