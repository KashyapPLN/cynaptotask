import React from 'react'
import {AiOutlinePlus,AiOutlineFolder} from 'react-icons/ai'
import {RiHome6Line} from 'react-icons/ri'
import {GrTemplate} from 'react-icons/gr'
import {FiRadio} from 'react-icons/fi'
export default function Menu() {
  return (
    <div>
      <h2 className='logo-title'>VEED.IO</h2>
      <button className='new-videoBtn'><span style={{marginLeft:'10px'}}>New Video</span><span style={{marginLeft:'130px'}}><AiOutlinePlus/></span></button>
      <button className='home-btn'><span style={{marginLeft:'10px',marginRight:'10px',fontSize:'20px'}}><RiHome6Line/></span><span style={{fontSize:'16px'}}>Home</span></button>
      <button className='common-btn'><span style={{marginLeft:'10px',marginRight:'10px',fontSize:'18px'}}><GrTemplate/></span><span style={{fontSize:'16px'}}>Templates</span></button>
      <button className='common-btn'><span style={{marginLeft:'10px',marginRight:'10px',fontSize:'23px'}}><AiOutlineFolder/></span><span style={{fontSize:'16px'}}>All Videos</span></button>
      <button className='common-btn'><span style={{marginLeft:'10px',marginRight:'10px',fontSize:'23px'}}><FiRadio/></span><span style={{fontSize:'16px'}}>Podcasts & Shows</span></button>
      <button className='common-btn'><img src='https://i.ibb.co/sgYPzJL/icon-s.png'/><span style={{fontSize:'16px',marginRight:'65px'}}>Brand Kit</span><span><img src='https://i.ibb.co/C7RVXnH/icon2.png'/></span></button>
    </div>
  )
}
