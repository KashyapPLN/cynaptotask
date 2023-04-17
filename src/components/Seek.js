import React,{useState} from 'react'
export default function Seek() {
    

  return (
    <div>
    
      <input
        type="range"
       className='videoSlide'
      
       
        style={{
          width: '98%',
          height: '6px',
          background: 'white',
          marginTop:'50px',
          appearance: 'none',
          outline: 'none',
          marginLeft:'0.5%',
          marginRight:'1%'
        
        }}
        
      />

    </div>
  );
}