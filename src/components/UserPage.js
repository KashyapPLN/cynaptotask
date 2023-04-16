import React from 'react';
import {Navbar } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import {FiUserPlus} from 'react-icons/fi';
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {SlBell} from 'react-icons/sl'
import {IoChevronForwardOutline} from 'react-icons/io5'
import VideoThumbnails from './RecentVideos';
import { useNavigate } from 'react-router-dom';
export default function UserPage() {
 const navigate= useNavigate();
  return (
    <div className='user-page'>
        <Navbar className='user-nav'>
        
     
        <div className='search-bar'>
       <div className='search-icon'><BsSearch/></div> 
        <input className='search'type='search' placeholder='Search'/>
        
        </div>
      <div style={{marginLeft:'auto',marginRight:'40px'}}>
        <button className='upgrade-btn'>Upgrade<span><img style={{marginLeft:'5px'}}src='https://i.ibb.co/Gn5fnbq/bolt.png'/></span></button>
        <button className='invite-btn'>Invite<span style={{marginLeft:'10px'}}><FiUserPlus/></span></button>
        <button className='faq'><AiOutlineQuestionCircle/></button>
        <button className='bell'><SlBell/></button>
        <img className='userDp' src='https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg' alt='usepic'/>
        </div>
        </Navbar>
        <h2 className='intro-text'>Let's create some <span style={{fontWeight:700}}>Videos!</span></h2>
        <div className='user-btns'>
          <button onClick={()=>navigate("/editor")} className='create-btn'><span><img style={{height:'50px',marginTop:'6px',marginBottom:'3px',marginRight:'6px'}}src='https://i.ibb.co/r5mN0Mq/edit.png'/></span>Create Project</button>
          <button className='record-btn'><span><img style={{height:'44px',marginTop:'6px',marginBottom:'2px',marginRight:'6px',width:'48px'}}src='https://i.ibb.co/Nn94HDP/record.png'/></span>Record Video</button>
          <button className='golive-btn'><span><img style={{height:'42px',marginTop:'6px',marginBottom:'3px',marginRight:'6px',width:'44px'}}src='https://i.ibb.co/ZWBVJrN/go-live.png'/></span>Go Live</button>
          <button className='podcast-btn'><span><img style={{height:'40px',marginTop:'6px',marginBottom:'3px',marginRight:'6px',width:'40px'}}src='https://i.ibb.co/sKG2BTf/podcast.png'/></span>Record Podcast</button>
        </div>
        <div style={{marginLeft:'50px',marginTop:'50px',display:'flex'}}>
        <p style={{fontWeight:500,fontSize:'18px'}}>My Recent Videos</p>
       <button className='allvid-btn'>All Videos<span style={{marginLeft:'6px'}}><IoChevronForwardOutline/></span></button>
        </div>
        {/* <RecentVideos/> */}
        {/* <VideoPlayer/> */}
        <VideoThumbnails/>
    </div>
  )
}
