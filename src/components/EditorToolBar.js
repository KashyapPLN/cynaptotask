import React,{useState} from 'react';
import {FiRotateCcw,FiRotateCw} from 'react-icons/fi';
import {RxScissors,RxCopy} from 'react-icons/rx';
import {GrSplit} from 'react-icons/gr';
import {ImPaste} from 'react-icons/im';
import {FiZoomOut,FiZoomIn} from 'react-icons/fi';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import $, { event } from 'jquery';
export default function EditorToolBar({initialMarkings}) {
  return (
    <div style={{display:'flex',flexDirection:'row',marginTop:'30px',marginLeft:'50px'}}>
        <button id='addMedia'className='toolBarButton'><AiOutlinePlusCircle/><span style={{fontSize:'18px',fontWeight:500}}> Add Media</span></button>
        <button className='toolBarButton'><FiRotateCcw/></button>
        <button className='toolBarButton'><FiRotateCw/></button>
        <button className='toolBarButton'><RxScissors/></button>
        <button className='toolBarButton'><RxCopy/></button>
        <button className='toolBarButton'><ImPaste/></button>
        <button className='toolBarButton'><GrSplit/></button>
        <SeekBar initialMarkings={initialMarkings}/>
    </div>
  )
}


function SeekBar({initialMarkings}) {
    
    
    return (
      <div>
        <button className='toolBarButton' id='zoomOutButton'><FiZoomOut/></button>
        <input
          type="range"
          id="seekBar"
          min={0}
          max={300}
          // value={initialMarkings}
          // onChange={(e)=>{handleChange(e)}}
          style={{
            width: '300px',
            height: '6px',
            background: 'gray',
            borderRadius: '5px',
            appearance: 'none',
            outline: 'none',
            margin: '0 10px',
            transform: 'scaleX(-1)'
          }}
        />
        <button className='toolBarButton' id='zoomInButton' ><FiZoomIn/></button>
      </div>
    );
  }




