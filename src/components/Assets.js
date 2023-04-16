import React from 'react'
import {MdOutlineFormatListBulleted} from 'react-icons/md'
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import {FaPlusSquare} from 'react-icons/fa'
import ThumbnailUploader from './AssetsDisplay'
export default function Assets() {
  return (
    <div style={{height:'60vh',position:'relative',overflowY: 'scroll'}}>
       <h3 style={{textAlign:'center',marginTop:'30px'}}>Assets</h3> 
       <div>
        <ThumbnailUploader />
       </div>
       <div className='assets-btns'>
       
       <button style={{marginRight:'100px'}} className='grid-btn'><FaPlusSquare/></button>
       <button className='grid-btn'><BsFillGrid3X3GapFill/></button>
      <button className='bullets-btn'><MdOutlineFormatListBulleted/></button>
      
      
       </div>
       
    </div>
  )
}
