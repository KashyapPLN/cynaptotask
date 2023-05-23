import React,{useState} from 'react';
import {FiRotateCcw,FiRotateCw} from 'react-icons/fi';
import {RxScissors,RxCopy} from 'react-icons/rx';
import {GrSplit} from 'react-icons/gr';
import {ImPaste} from 'react-icons/im';
import {FiZoomOut,FiZoomIn} from 'react-icons/fi';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import $ from 'jquery';
export default function EditorToolBar({temp,setTemp,incrementReading,decrementReading,addMedia,maxVal,val,reading,setReading}) {
  return (
    <div style={{display:'flex',flexDirection:'row',marginTop:'30px',marginLeft:'50px'}}>
        <button className='toolBarButton'><AiOutlinePlusCircle/><span style={{fontSize:'18px',fontWeight:500}} onClick={addMedia}> Add Media</span></button>
        <button className='toolBarButton'><FiRotateCcw/></button>
        <button className='toolBarButton'><FiRotateCw/></button>
        <button className='toolBarButton'><RxScissors/></button>
        <button className='toolBarButton'><RxCopy/></button>
        <button className='toolBarButton'><ImPaste/></button>
        <button className='toolBarButton'><GrSplit/></button>
        <SeekBar temp={temp} setTemp={setTemp} incrementReading={incrementReading} decrementReading={decrementReading} maxVal={maxVal} val={val} reading={reading} setReading={setReading}/>
    </div>
  )
}


function SeekBar({temp,setTemp,incrementReading,decrementReading,maxVal,val,reading,setReading}) {
    const [zoomLevel, setZoomLevel] = useState(reading);
  function increaseWidth(){
    if($(temp).width()!=='undefined'){
      // setCount(count+5);
      let a= $(temp).width()+5;
      $(temp).css('width',a+'px')
       console.log(a);
      }
      if($(".mediaFiles")){
        //  let b= $(".mediaFiles").width()+5;
        //  $(".mediaFiles").css('width',b+'px');
        $(".mediaFiles").each(function() {
          var currentWidth = $(this).width();
          var newWidth = currentWidth + 5;
          $(this).width(newWidth);
        });
        }
  }
    const handleZoomIn = () => {
      setZoomLevel(Math.min(zoomLevel + 0.1, 2));
     
      decrementReading();
   increaseWidth();
    };
  function decreaseWidth(){
    if($(temp).width()!=='undefined'&&$(temp).width()>5){
        
      let val= $(temp).width()-5;
     $(temp).css('width',val+'px');
      console.log(val);
      }
      
      if($(".mediaFiles")){
      // let c= $(".mediaFiles").width()-5;
      // $(".mediaFiles").css('width',c+'px');
      $(".mediaFiles").each(function() {
        var currentWidth = $(this).width();
        var newWidth = currentWidth - 5;
        $(this).width(newWidth);
      });
      
      }
  }
    const handleZoomOut = () => {
      if (zoomLevel > 0.1) {
        setZoomLevel(Math.max(zoomLevel - 0.1, 0.1));
      } else {
        setZoomLevel(0);
      }
      incrementReading();
    decreaseWidth();
        
    };
  
    const handleSeekBarChange = (event) => {
      // Handle seek bar change
      setReading(Number(event.target.value));
      
        var prevValue = $("#seekBar").val();
      
        $("#seekBar").on("input", function(event) {
          var currentValue = $(this).val();
      
          if (currentValue > prevValue) {
            increaseWidth();
          } else if (currentValue < prevValue) {
            decreaseWidth();
          }
      
          prevValue = currentValue;
        });
      
      
    };
  
    // const max = zoomLevel === 0 ? 1 : maxVal / zoomLevel;
    const value = zoomLevel === 0 ? 0 : val;
  
    return (
      <div>
        <button className='toolBarButton' onClick={handleZoomOut}><FiZoomOut/></button>
        <input
          type="range"
          id="seekBar"
          min={0}
          max={300}
          value={value}
          onChange={handleSeekBarChange}
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
        <button className='toolBarButton' onClick={handleZoomIn} ><FiZoomIn/></button>
      </div>
    );
  }




