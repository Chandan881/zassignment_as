import React from 'react'
import "./HightLights.css"

const HightLight = () => {
  return (
    <div className='highlight'>
        <div className='highlight_left'>
          <img className='highlights_img' src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="images" />
        </div>
        <div className='highlight_right'>
           <h1 className='highlight_right_up'>Project HightLight</h1>
           <h1 className='highlight_right_mid'>Near To School</h1>
           <p className='highlight_right_down'>
                Lorem Ipsum is used to fill the dummy text as
                shown in above to fill datas as per req sign dummy text as shown in above to fill
                the dummy text as shown in above feild.</p>
        </div>
    </div>
  )
}

export default HightLight