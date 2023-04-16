import React from 'react'
import {FaMousePointer} from 'react-icons/fa'
import {IoHandRightOutline} from 'react-icons/io5'
import {ImCrop} from 'react-icons/im'
import PercentageDropdown from './PercentageDropdown'
export default function Player() {
  return (
    <div style={{height:'60vh'}}>
      <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
        <button className='pointer-btn'><FaMousePointer/></button>
        <button className='pointer-btn'><IoHandRightOutline/></button>
        <button className='pointer-btn'><ImCrop/></button>
        <PercentageDropdown/>
      </div>
      <div className='vid-player'>
        <iframe src='https://player.vimeo.com/video/112836958?h=d4a3a50265' width="800" height="450" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen/>
      </div>
    </div>
  )
}


